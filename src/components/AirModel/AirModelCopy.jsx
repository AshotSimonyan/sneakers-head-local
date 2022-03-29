import React, { useRef, Suspense } from 'react'
import {ContactShadows, OrbitControls, Environment, useGLTF, Stage} from '@react-three/drei'
import {Canvas, useFrame} from "@react-three/fiber";

const Model = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/sneaker.glb')

  useFrame(() => {
    group.current.position.y = -0.1
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.AirMax_Head_Low.geometry} material={nodes.AirMax_Head_Low.material} position={[0, 0, 0]} scale={0.1} />
      <mesh geometry={nodes.Cords_low.geometry} material={nodes.Cords_low.material} scale={0.01} />
      <mesh geometry={nodes.MADE_IN_METAVERSE.geometry} material={nodes.MADE_IN_METAVERSE.material} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

function App() {
    return (
        <Canvas shadows dpr={[1, 2]}  camera={{ zoom: 2.2, position: [0, -10, 0] }}>
            <Suspense fallback={null}>

              <Stage preset="rembrandt" intensity={0.5}>
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
