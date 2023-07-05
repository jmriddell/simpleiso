import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SoftShadows, useGLTF } from '@react-three/drei';

import Loader from '../Loader';
// import { VolumesCanvas } from '.';

const Volume = () => {
  const volume = useGLTF('./isogeo/iso.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight   
        position={[100, 100, -40]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive 
        object={volume.scene}
        scale={0.035}
        position={[-2, -2, -1]}
        rotation={[-0.36, -Math.PI / 6, -Math.PI / 6]}
      />
    </mesh>
  );
};

const VolumesCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows 
      camera={{ position: [20, 10, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={2.2}
          minPolarAngle={1.0}
          maxAzimuthAngle={2.2}
          minAzimuthAngle={1.0}
        />        
      </Suspense>
      
      <Volume />

      <Preload all />
    </Canvas>
  );
};

export default VolumesCanvas;