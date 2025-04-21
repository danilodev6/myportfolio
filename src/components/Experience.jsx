import {
  CameraControls,
  Environment,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
  Float,
  useFont,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef } from "react";
import MyRoom from "../components/MyRoom.jsx";
import { useAtom } from "jotai";
import { currentPageAtom } from "./UI.jsx";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils.js";
import TextureRoom from "./TextureRoom.jsx";

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraHero = useRef();
  const textMaterial = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useFrame((_, delta) => {
    textMaterial.current.opacity = lerp(
      textMaterial.current.opacity,
      currentPage === "home" || currentPage === "intro" ? 1 : 0,
      delta * 1.5,
    );
  });

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.5;
    setTimeout(() => {
      setCurrentPage("home");
    }, 1000);
    fitCamera();
  };

  const fitCamera = async () => {
    const isMobile = window.innerWidth <= 1024;

    if (currentPage === "hero") {
      controls.current.smoothTime = 0.6;
      await controls.current.fitToBox(meshFitCameraHero.current, true);

      if (isMobile) {
        controls.current.setLookAt(0.5, 1, 8.3, 9, 1, -5, true); // Mobile settings
      } else {
        controls.current.setLookAt(2, 1, 4, 9, 1, -5, true); // Desktop settings
      }
    } else {
      controls.current.smoothTime = 1.6;
      await controls.current.fitToBox(meshFitCameraHome.current, true);
    }
  };

  // const fitCamera = async () => {
  //   if (currentPage === "hero") {
  //     controls.current.smoothTime = 0.7;
  //     await controls.current.fitToBox(meshFitCameraHero.current, true);
  //     controls.current.setLookAt(0.5, 1, 8.3, 9, 1, -5, true);
  //   } else {
  //     controls.current.smoothTime = 1.6;
  //     await controls.current.fitToBox(meshFitCameraHome.current, true);
  //   }
  // };

  // const fitCamera = async () => {
  //   if (currentPage === "hero") {
  //     controls.current.smoothTime = 1.2;
  //     controls.current.fitToBox(meshFitCameraHero.current, true);
  //     controls.current.setLookAt(2, 1, 4, 9, 1, -5, true);
  //   } else {
  //     controls.current.smoothTime = 1.6;
  //     controls.current.fitToBox(meshFitCameraHome.current, true);
  //   }
  // };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position-z={1.8} visible={false}>
        <boxGeometry args={[8.5, 2.5, 2.5]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <Text
        font={"fonts/Poppins-Black.ttf"}
        position={[-1.3, -0.5, 1]}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(40)}
        anchorY={"bottom"}
      >
        {" "}
        I'M DANILO {"\n"} DEVELOPER
        <meshBasicMaterial color="#fff" toneMapped={false} ref={textMaterial}>
          <RenderTexture attach={"map"}>
            {" "}
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={6}>
              <TextureRoom
                scale={1.7}
                rotation-y={degToRad(-45)}
                rotation-x={degToRad(20)}
                position-y={-1}
                position-x={1}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <group rotation-y={degToRad(-45)} position-y={0.32} position-x={5.75}>
        <MyRoom scale={1.4} html />
        <mesh ref={meshFitCameraHero} position-z={2} visible={false}>
          <boxGeometry args={[5, 2, 3]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("fonts/Poppins-Black.ttf");
