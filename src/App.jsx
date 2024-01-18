import { Canvas } from '@react-three/fiber'
import { Box } from './Box'
export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box positionTest={[-0.75, 0, 0]} name="A" />
      <Box positionTest={[0.75, 0, 0]} name="A" />
    </Canvas>
  )
}
