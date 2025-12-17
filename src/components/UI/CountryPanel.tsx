import { X, Tv, Signal, Radio } from 'lucide-react';
import { Country } from '@/data/countries';
import { Button } from '@/components/ui/button';

interface CountryPanelProps {
  country: Country | null;
  onClose: () => void;
}

export const CountryPanel = ({ country, onClose }: CountryPanelProps) => {
  if (!country) return null;

  // Generate mock channel categories
  const categories = [
    { name: 'News', count: Math.floor(country.channels * 0.2) },
    { name: 'Entertainment', count: Math.floor(country.channels * 0.35) },
    { name: 'Sports', count: Math.floor(country.channels * 0.15) },
    { name: 'Movies', count: Math.floor(country.channels * 0.2) },
    { name: 'Kids', count: Math.floor(country.channels * 0.1) },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 glass-panel p-5 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-foreground">{country.name}</h2>
          <p className="text-sm text-muted-foreground">{country.code}</p>
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

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Tv className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold gradient-text">{country.channels}</p>
            <p className="text-xs text-muted-foreground">Total Channels</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Signal className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">HD</p>
            <p className="text-xs text-muted-foreground">Quality</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Categories
        </p>
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between">
            <span className="text-sm text-foreground">{cat.name}</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-20 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${(cat.count / country.channels) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground w-8">{cat.count}</span>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
        <Radio className="w-4 h-4 mr-2" />
        Browse Channels
      </Button>
    </div>
  );
};
