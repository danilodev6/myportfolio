import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React, { Suspense } from "react";
import { Experience } from "../components/Experience";
import { UI } from "../components/UI";

export const Home = () => {
  return (
    <section className="w-full h-dvh relative">
      <div className="w-full h-dvh flex items-center justify-center">
        {" "}
        <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 42 }}>
          <color attach="background" args={["#171720"]} />
          <fog attach="fog" args={["#171720", 8, 17]} />
          <Suspense>
            <Experience />
          </Suspense>
          <EffectComposer>
            <Bloom mipmapBlur intensity={1.3} />
          </EffectComposer>
        </Canvas>
        <UI />
      </div>
    </section>
  );
};

export default Home;
