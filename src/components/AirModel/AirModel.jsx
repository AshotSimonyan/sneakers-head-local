import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';

extend({ OrbitControls });

const SpaceShip = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('/1k.glb', setModel);
  }, []);
  if (model) {
    model.scene.anisotropy = 16;
  }

  console.log(model);
  return model ? (
    <primitive object={model.scene} position={[0, 0, 0]} scale={[1, 1, 1]} />
  ) : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate={true}
      autoRotateSpeed={6}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      enableZoom={false}
      enablePan={false}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

export default function AirModel() {
  const isBrowser = typeof window !== 'undefined';
  console.log(SpaceShip());
  return (
    <>
      {isBrowser && (
        <Canvas
          style={{ width: '100%', height: '100%' }}
          camera={{ position: [0, 0, 22] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.anisotropy = 16;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <ambientLight intensity={0.3} color='0xffffff' />
          <ambientLight intensity={0.3} position={[-10, -20, 0]} />
          <directionalLight intensity={0.9} position={[10, 30, 0]} />
          <directionalLight intensity={0.9} position={[10, 10, 0]} />
          <directionalLight intensity={0.9} position={[-10, 10, 0]} />
          <directionalLight intensity={0.9} position={[-5, -10, 0]} />

          <Controls />
          <SpaceShip />
        </Canvas>
      )}
    </>
  );
}
