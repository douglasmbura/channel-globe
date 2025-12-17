import { useState } from 'react';
import { Scene } from '@/components/Globe/Scene';
import { Header } from '@/components/UI/Header';
import { CountryPanel } from '@/components/UI/CountryPanel';
import { Instructions } from '@/components/UI/Instructions';
import { Country } from '@/data/countries';

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[hsl(var(--space-dark))]" />
      
      {/* 3D Globe */}
      <div className="absolute inset-0">
        <Scene 
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
        />
      </div>

      {/* UI Overlay */}
      <Header />
      <CountryPanel 
        country={selectedCountry} 
        onClose={() => setSelectedCountry(null)} 
      />
      {!selectedCountry && <Instructions />}
    </div>
  );
};

export default Index;
