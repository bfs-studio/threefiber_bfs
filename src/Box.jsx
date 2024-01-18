import { useRef, useEffect, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'


export function Box(props) {
  // If you want to read or modify the properties of a component instance at run time,
  // then it is beneficial to have some kind of reference to that instance.
  const instanceRef = useRef()
  const materialRef = useRef()
  // The useEffect hook executes after the function returns the generated component instance within it,
  // which means the any ref will be assigned before the useEffect hook gets called.
  useEffect(() => {
    //console.log(instanceRef.current)
  })

  // useMemo started
  //useMemo({})
  //console.log(instanceRef)

  // The useState Hook is a React component that allows us to track state between function calls, and provide a way to modify it.
  // useState accepts an initial state and returns two values:
  // The current state.
  // 1.A function that updates the state.
  // 2.We should never directly update state in our components, but use the useState hook instead.
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)

  // This hook allows you to execute code on every rendered frame, like running effects, updating controls, and so on.
  // You receive the state (same as useThree) and a clock delta.
  // Your callback function will be invoked just before a frame is rendered.
  useFrame((state, delta) => {
    if (rotate) {
      instanceRef.current.rotation.x += 1 * delta
      instanceRef.current.rotation.y += 0.5 * delta
    }
   
    // From up to down rotation like a circle
    // instanceRef.current.position.y = Math.sin(
    //   state.clock.getElapsedTime()
    // )
  })

  return (
    <mesh
      {...props}
      scale={hovered ? [1.1,1.1,1.1] : [1,1,1]}
      ref={instanceRef}
      position={props.positionTest}
      onPointerDown={(e) => setRotate(!rotate)}
      // onPointerUp={(e) => console.log(' pointer up ' + e.object.name)}
      //Tuttum
      onPointerOver={(e) => setHover(true)}
      //Biraktim gibi dusunulebilir
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry />
      <meshBasicMaterial
        color={hovered ? 0xff0000 : 0x00ff00}
        wireframe={true}
        ref={materialRef}
      />
    </mesh>
  )
}
