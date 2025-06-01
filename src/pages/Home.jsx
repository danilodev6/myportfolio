import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React, { Suspense, useEffect, useState } from "react";
import { Experience } from "../components/Experience";
import { UI } from "../components/UI";

export const Home = () => {
  const [enableFog, setEnableFog] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setEnableFog(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full h-dvh relative">
      <div className="w-full h-dvh flex items-center justify-center">
        <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 42 }}>
          <color attach="background" args={["#171720"]} />
          {enableFog && <fog attach="fog" args={["#171720", 11, 17]} />}
          <Suspense>
            <Experience />
          </Suspense>
          <EffectComposer>
            <Bloom mipmapBlur intensity={0.35} />
          </EffectComposer>
        </Canvas>
        <UI />
      </div>
    </section>
  );
};

export default Home;
