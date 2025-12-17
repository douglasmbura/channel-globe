import { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { Earth } from './Earth';
import { CountryMarker } from './CountryMarker';
import { countries, Country } from '@/data/countries';

interface GlobeContentProps {
  selectedCountry: Country | null;
  onSelectCountry: (country: Country | null) => void;
}

const GlobeContent = ({ selectedCountry, onSelectCountry }: GlobeContentProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && !selectedCountry) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Earth />
      {countries.map((country) => (
        <CountryMarker
          key={country.code}
          country={country}
          onSelect={onSelectCountry}
          isSelected={selectedCountry?.code === country.code}
        />
      ))}
    </group>
  );
};

const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[1, 32, 32]} />
    <meshBasicMaterial color="#0a1a2e" wireframe />
  </mesh>
);

interface SceneProps {
  selectedCountry: Country | null;
  onSelectCountry: (country: Country | null) => void;
}

export const Scene = ({ selectedCountry, onSelectCountry }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<LoadingFallback />}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4fc3f7" />
        
        {/* Stars background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />

        {/* Main globe content */}
        <GlobeContent 
          selectedCountry={selectedCountry} 
          onSelectCountry={onSelectCountry} 
        />

        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={1.5}
          maxDistance={4}
          rotateSpeed={0.5}
          zoomSpeed={0.5}
          autoRotate={!selectedCountry}
          autoRotateSpeed={0.5}
        />
        
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
