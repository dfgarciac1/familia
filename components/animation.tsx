import React, { Suspense, useRef, useState } from 'react'
import { Canvas,extend, useFrame ,useThree} from '@react-three/fiber'
import { Html } from '@react-three/drei'
function Box(props:any) {
  // This reference will give us direct access to the mesh
  const ref:any = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    
    <mesh
    
      {...props}
      ref={ref}
      scale={active ? 1.5 : 2}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Sphere(props:any) {
  // This reference will give us direct access to the mesh
  const ref:any = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
         
    <mesh
      {...props}
      ref={ref}
      scale={active ? 2 : 1.2}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <sphereGeometry  attach="geometry"  />
      <meshStandardMaterial attach="material"
     color={hovered ? 'hotpink' : 'rgb(63,94,251)'}  />
    </mesh>
  )
}
export default function animation() {
  return (
    <Canvas  style={{height: `500px`}} >
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback="loading">

        <Html>
          
          </Html>
      <Sphere position={[0, 1, 1]}/>
      <Sphere position={[0, -1.5, 1]} />
      </Suspense>

    </Canvas>
  )
}
