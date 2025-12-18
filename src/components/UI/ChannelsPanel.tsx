import { useState, useEffect } from 'react';
import { X, Tv, Eye, Play, Loader2 } from 'lucide-react';
import { Country, Channel, parseM3U } from '@/data/countries';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ChannelsPanelProps {
  country: Country | null;
  onClose: () => void;
  onPlayChannel: (channel: Channel) => void;
}

export const ChannelsPanel = ({ country, onClose, onPlayChannel }: ChannelsPanelProps) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
  }, [country]);

  if (!country) return null;

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 w-96 max-h-[80vh] glass-panel animate-fade-in flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-start justify-between">
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
                {loading ? 'Loading...' : `${channels.length} channels available`}
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
      </div>

      {/* Channels List */}
      <ScrollArea className="flex-1 max-h-[400px]">
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

          {!loading && !error && channels.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No channels found</p>
            </div>
          )}

          {channels.map((channel, index) => (
            <div
              key={`${channel.name}-${index}`}
              className="group flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
              onClick={() => onPlayChannel(channel)}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Tv className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {channel.name}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span className="text-red-400">{formatViews(channel.liveViews)}</span> watching
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Play className="w-4 h-4 text-primary" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
