import { Tv, Globe } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center marker-glow">
            <Tv className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              TV<span className="gradient-text">.globe</span>
            </h1>
            <p className="text-xs text-muted-foreground">Explore world television</p>
          </div>
        </div>
        
        <div className="glass-panel px-4 py-2 flex items-center gap-2">
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">50 Countries</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">5,000+ Channels</span>
        </div>
      </div>
    </header>
  );
};
