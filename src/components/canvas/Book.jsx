import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Book = ({isMobile}) => {
  const book = useGLTF("./medieval_fantasy_book/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2}  groundColor='black' />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={book.scene}
        scale={isMobile ? 0.05 : 0.08}
        position={isMobile ? [0, 0, -2.2] : [1, -1.5, -1.5]}
        rotation={[-0.01, 2, -0.1]}
      />
    </mesh>
  );
};

const BookCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadow
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={1}
        />
        <Book isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BookCanvas;