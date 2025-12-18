import { useState, useRef } from 'react';
import { Scene, SceneHandle } from '@/components/Globe/Scene';
import { Header } from '@/components/UI/Header';
import { ChannelsPanel } from '@/components/UI/ChannelsPanel';
import { VideoPlayer } from '@/components/UI/VideoPlayer';
import { ZoomControls } from '@/components/UI/ZoomControls';
import { Instructions } from '@/components/UI/Instructions';
import { Country, Channel } from '@/data/countries';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [playingChannel, setPlayingChannel] = useState<Channel | null>(null);
  const sceneRef = useRef<SceneHandle>(null);

  const handleSelectCountry = (country: Country | null) => {
    setSelectedCountry(country);
  };

  const handlePlayChannel = (channel: Channel) => {
    setPlayingChannel(channel);
  };

  const handleClosePlayer = () => {
    setPlayingChannel(null);
  };

  const handleZoomIn = () => {
    sceneRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    sceneRef.current?.zoomOut();
  };

  const handleReset = () => {
    sceneRef.current?.reset();
    setSelectedCountry(null);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[hsl(var(--space-dark))]" />
      
      {/* 3D Globe */}
      <div className="absolute inset-0">
        <Scene
          ref={sceneRef}
          selectedCountry={selectedCountry}
          onSelectCountry={handleSelectCountry}
        />
      </div>

      {/* UI Overlays */}
      <Header onPlayChannel={handlePlayChannel} />
      
      <ChannelsPanel
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        onPlayChannel={handlePlayChannel}
      />

      <ZoomControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      {!selectedCountry && <Instructions />}

      {/* Video Player Modal */}
      <VideoPlayer
        channel={playingChannel}
        onClose={handleClosePlayer}
      />

      <Toaster />
    </div>
  );
};

export default Index;
