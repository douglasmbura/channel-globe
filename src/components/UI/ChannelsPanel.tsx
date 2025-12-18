import { useState, useEffect, useMemo } from 'react';
import { X, Tv, Eye, Play, Loader2, Heart, Share2, Search, Filter } from 'lucide-react';
import { Country, Channel, parseM3U, CATEGORIES } from '@/data/countries';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from '@/hooks/use-toast';

interface ChannelsPanelProps {
  country: Country | null;
  onClose: () => void;
  onPlayChannel: (channel: Channel) => void;
}

export const ChannelsPanel = ({ country, onClose, onPlayChannel }: ChannelsPanelProps) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!country) {
      setChannels([]);
      return;
    }

    const fetchChannels = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(country.url);
        if (!response.ok) throw new Error('Failed to fetch channels');
        const content = await response.text();
        const parsedChannels = parseM3U(content);
        setChannels(parsedChannels);
      } catch (err) {
        setError('Unable to load channels');
        setChannels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
    setSearchQuery('');
    setSelectedCategory('All');
  }, [country]);

  const filteredChannels = useMemo(() => {
    return channels.filter(channel => {
      const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || 
        channel.category?.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [channels, searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const cats = new Set(channels.map(c => c.category || 'General'));
    return ['All', ...Array.from(cats)];
  }, [channels]);

  const handleShare = async (channel: Channel) => {
    const shareText = `Watch ${channel.name} from ${country?.name} on TV Globe!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: channel.name,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      toast({
        title: 'Link copied!',
        description: 'Share link has been copied to clipboard.',
      });
    }
  };

  const handleFavorite = (channel: Channel) => {
    if (!country) return;
    toggleFavorite(channel, country.name, country.flag);
    toast({
      title: isFavorite(channel.url) ? 'Removed from favorites' : 'Added to favorites',
      description: channel.name,
    });
  };

  if (!country) return null;

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 w-[420px] max-h-[85vh] glass-panel animate-fade-in flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <img 
              src={country.flag} 
              alt={`${country.name} flag`}
              className="w-10 h-7 object-cover rounded shadow-md"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <h2 className="text-lg font-bold text-foreground">{country.name}</h2>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Tv className="w-3 h-3" />
                {loading ? 'Loading...' : `${filteredChannels.length} of ${channels.length} channels`}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 bg-secondary/50"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide">
          <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          {categories.slice(0, 8).map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'ghost'}
              size="sm"
              className="h-7 px-2 text-xs whitespace-nowrap"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Channels List */}
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-2">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          )}
          
          {error && (
            <div className="text-center py-8 text-muted-foreground">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && filteredChannels.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No channels found</p>
            </div>
          )}

          {filteredChannels.map((channel, index) => (
            <div
              key={`${channel.name}-${index}`}
              className="group flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div 
                className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
                onClick={() => onPlayChannel(channel)}
              >
                <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {channel.logo ? (
                    <img 
                      src={channel.logo} 
                      alt={channel.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>';
                      }}
                    />
                  ) : (
                    <Tv className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {channel.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span className="text-red-400">{formatViews(channel.liveViews)}</span>
                    </span>
                    {channel.category && (
                      <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary text-[10px]">
                        {channel.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleFavorite(channel)}
                >
                  <Heart className={`w-4 h-4 ${isFavorite(channel.url) ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleShare(channel)}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onPlayChannel(channel)}
                >
                  <Play className="w-4 h-4 text-primary" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
