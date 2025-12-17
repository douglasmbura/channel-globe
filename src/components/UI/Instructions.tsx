import { Mouse, Move, ZoomIn } from 'lucide-react';

export const Instructions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 glass-panel px-4 py-3 flex items-center gap-6">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Move className="w-4 h-4" />
        <span className="text-xs">Drag to rotate</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <ZoomIn className="w-4 h-4" />
        <span className="text-xs">Scroll to zoom</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Mouse className="w-4 h-4" />
        <span className="text-xs">Click marker</span>
      </div>
    </div>
  );
};
