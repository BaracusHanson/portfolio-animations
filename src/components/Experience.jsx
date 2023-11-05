import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Sky, Environment } from "@react-three/drei";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "FallingIdle", "Idle"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.4}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color={"#000000"}
        />
        <Avatar animation={animation} />

        {animation === "Typing" && (
          <mesh scale={[0.8, 0.4, 0.7]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color={"indigo"} />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.01}>
          <planeGeometry />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </group>
    </>
  );
};
