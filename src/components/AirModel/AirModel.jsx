import React, { useRef, Suspense } from "react"
import { OrbitControls, useGLTF, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Model = ({ ...props }) => {
  const group = useRef()
  const { nodes } = useGLTF("/sneaker-compressed.glb")

  return (
    <group  ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.AirMax_Head_Low.geometry}
        material={nodes.AirMax_Head_Low.material}
        position={[0, 0, 0]}
        scale={0.1}
      />
      <mesh
        geometry={nodes.Cords_low.geometry}
        material={nodes.Cords_low.material}
        scale={0.01}
      />
      <mesh
        geometry={nodes.MADE_IN_METAVERSE.geometry}
        material={nodes.MADE_IN_METAVERSE.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

function App() {
  return (
    <Canvas
      shadows={false}
      camera={{ zoom: 0.7, position: [0, 0, 0], fov: 30  }}
    >
      <Suspense fallback={null}>
        <Stage
          contactShadow={false}
          preset="soft"
          intensity={0.9}
        >
          <Model />
          <OrbitControls
            autoRotate
            autoRotateSpeed={6}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            target={[0, 0.13, 0]}
          />
        </Stage>

      </Suspense>

    </Canvas>
  )
}

export default App
