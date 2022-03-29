import React, { useRef, Suspense } from 'react'
import {OrbitControls, Environment, useGLTF, Stage} from '@react-three/drei'
import {Canvas, useFrame} from "@react-three/fiber";

const Model = ({ ...props }) => {
  const group = useRef()
  const { nodes } = useGLTF('/sneaker-compressed.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.position.y = (-5 + Math.sin(t / 1.2)) / 44
  })
  return (
    <group ref={group} {...props} dispose={null} >
      <mesh geometry={nodes.AirMax_Head_Low.geometry} material={nodes.AirMax_Head_Low.material} position={[0, 0, 0]} scale={0.1} />
      <mesh geometry={nodes.Cords_low.geometry} material={nodes.Cords_low.material} scale={0.01} />
      <mesh geometry={nodes.MADE_IN_METAVERSE.geometry} material={nodes.MADE_IN_METAVERSE.material} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

function App() {
  return (
    <Canvas shadows dpr={[1, 2]}  camera={{ zoom: 0.8, position: [0, 0, 0], fov: 30 }}>
      <Suspense fallback={null}>

        <Stage preset="rembrandt" intensity={0.9}>
          <Model />
        </Stage>
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={6}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>

  );
}

export default App;
