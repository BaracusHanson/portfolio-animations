import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 10 }}>
      <color attach="background" args={["#9519d4"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
