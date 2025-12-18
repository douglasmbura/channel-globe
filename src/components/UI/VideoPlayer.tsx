import { X, Volume2, Maximize2 } from 'lucide-react';
import { Channel } from '@/data/countries';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  channel: Channel | null;
  onClose: () => void;
}

export const VideoPlayer = ({ channel, onClose }: VideoPlayerProps) => {
  if (!channel) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in">
      <div className="relative w-full max-w-5xl mx-4">
        {/* Header */}
        <div className="absolute -top-12 left-0 right-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
            <span className="px-2 py-1 rounded-full bg-red-500 text-xs text-white animate-pulse">
              LIVE
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <video
            src={channel.url}
            controls
            autoPlay
            className="w-full h-full"
            onError={(e) => {
              // Hide controls on error and show message
              e.currentTarget.style.display = 'none';
            }}
          />
          
          {/* Fallback for HLS streams */}
          <iframe
            src={channel.url}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ display: 'none' }}
          />
          
          {/* If video fails, show embedded player suggestion */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white">
            <p className="text-lg mb-4">Streaming: {channel.name}</p>
            <p className="text-sm text-muted-foreground mb-4">
              Stream URL: {channel.url.substring(0, 50)}...
            </p>
            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Open Stream in New Tab
            </a>
          </div>
        </div>

        {/* Controls hint */}
        <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-4 text-white/50 text-sm">
          <span className="flex items-center gap-1">
            <Volume2 className="w-4 h-4" /> Adjust volume
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 className="w-4 h-4" /> Press F for fullscreen
          </span>
        </div>
      </div>
    </div>
  );
};
