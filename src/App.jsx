import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import Neon from "./components/Light";
import { Frames } from "./components/Frames";

import DownloadDialog from "./components/DownloadDialog";
import { useEffect } from "react";

export const App = ({ images }) => {
  const windowWidth = useRef(window.innerWidth);

  const handleResize = () => {
    if (windowWidth.current >= 1000) return { fov: 70, position: [0, 2, 15] };
    if (windowWidth.current <= 600) return { fov: 120, position: [0, 2, 15] };
    if (windowWidth.current <= 1000) return { fov: 100, position: [0, 2, 15] };
  };
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const [likes, setLikes] = useState({});
  useEffect(() => {
    fetch("https://the-virtual-gallery.netlify.app/.netlify/functions/like")
      .then((res) => res.json())
      .then(setLikes);
  }, []);

  return (
    <>
      <Canvas dpr={[1, 2]} camera={handleResize()}>
        <color attach="background" args={["#E7E5E4"]} />
        <fog attach="fog" args={["#191920", 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <Frames
            images={images}
            setShowDownloadModal={setShowDownloadModal}
            likes={likes}
          />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.23}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#060606"
              metalness={1.12}
            />
          </mesh>
          <Neon />
        </group>
        <Environment preset="studio" />
      </Canvas>
      <DownloadDialog
        images={images}
        setShowDownloadModal={setShowDownloadModal}
        showDownloadModal={showDownloadModal}
      />
    </>
  );
};
