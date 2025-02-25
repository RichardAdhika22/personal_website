import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Book = ({isMobile}) => {
  const book = useGLTF("./medieval_fantasy_book/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1}  groundColor='black' />
      <pointLight intensity={7} position={[0,0,0]} decay={2} distance={0}/>
      {/* <spotLight
        position={[-10, 0, 0]}
        angle={0.2}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={2048}
        target={book.scene}
      /> */}
      <ambientLight intensity={0.8} />
      <primitive
        object={book.scene}
        scale={isMobile ? 0.05 : 0.09}
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
      camera={{ position: [22, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      // style={{ width: '100vw', height: '100vh' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={1.8}
          minPolarAngle={1.4}
        />
        <Book isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BookCanvas;