import { ContactShadows, OrbitControls } from "@react-three/drei"; // Import des composants de trois.js pour les ombres et les contrôles de la caméra
import { Avatar } from "./Avatar"; // Import du composant Avatar que vous avez défini précédemment
import { useControls } from "leva"; // Import de Leva pour gérer les contrôles interactifs
import { Sky, Environment } from "@react-three/drei"; // Import de composants pour ajouter un ciel et un environnement

export const Experience = () => {
  // Gestion de l'animation qui sera passée en tant que prop
  const { animation } = useControls({
    animation: {
      value: "Typing", // Animation par défaut
      options: ["Typing", "FallingIdle", "Idle"], // Options pour sélectionner l'animation
    },
  });
  return (
    <>
      <OrbitControls /> {/* Contrôles pour orbiter autour de la scène */}
      <Sky /> {/* Ajout d'un ciel pour la scène */}
      <Environment preset="sunset" />{" "}
      {/* Environnement prédéfini pour l'éclairage et les réflexions */}
      <group position-y={-1}>
        <ContactShadows
          opacity={0.4}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color={"#000000"}
        />
        <Avatar animation={animation} />{" "}
        {/* Composant Avatar avec animation basée sur la valeur de 'animation' */}
        {/* Affichage conditionnel du cube lorsque 'animation' est "Typing" */}
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
