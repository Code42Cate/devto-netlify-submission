import {
  Environment,
  Image,
  MeshReflectorMaterial,
  Text,
  Tube,
  useCursor,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import getUuid from "uuid-by-string";
import { useLocation, useRoute } from "wouter";

const GOLDEN_RATIO = 1.61803398875;

export const App = ({ images }) => {
  const windowWidth = useRef(window.innerWidth);

  const handleResize = () => {
    if (windowWidth.current >= 1000) return { fov: 70, position: [0, 2, 15] };
    if (windowWidth.current <= 600) return { fov: 120, position: [0, 2, 15] };
    if (windowWidth.current <= 1000) return { fov: 100, position: [0, 2, 15] };
  };

  return (
    <Canvas dpr={[1, 2]} camera={handleResize()}>
      {/* <CameraControls /> */}
      <color attach="background" args={["#E7E5E4"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
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
  );
};

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDEN_RATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        );
      }}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map(
        (props) => <Frame key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef();
  const frame = useRef();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = params?.id === name;
  useCursor(hovered);
  useFrame((state, dt) => {
    if (isActive) {
      state.camera.zoom = 1;
      state.camera.updateProjectionMatrix();
      easing.dampC(frame.current.material.color, "white", 0.1, dt);
      // remove
      return;
    }

    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.95 : 1),
        0.9 * (!isActive && hovered ? 0.95 : 1),
        1,
      ],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hovered ? "#c23a67" : "white",
      0.1,
      dt
    );
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => {
          e.stopPropagation();
          hover(true);
        }}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDEN_RATIO, 0.05]}
        position={[0, GOLDEN_RATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDEN_RATIO, 0]}
        fontSize={0.025}
        color={hovered ? "#c23a67" : "black"}
      >
        {name.split("-").join(" ")}
      </Text>
    </group>
  );
}

function Neon() {
  const neon2Ref = useRef();

  return (
    <group>
      <mesh rotation={[0, 0, 0.5]} position={[-0.035, 0.445, -0.6]}>
        <cylinderGeometry args={[0.012, 0.012, 1, 32]} />
        <meshStandardMaterial
          // color="#c23a67"
          // emissive="#7a042b"
          // emissiveIntensity={3}
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, -Math.PI * 1.8]}
        position={[-1.7, 0.02, 4]}
      >
        <cylinderGeometry args={[0.02, 0.02, 1.5, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, -Math.PI * 0.05]}
        position={[-1.2, 0.02, 2.2]}
      >
        <cylinderGeometry args={[0.02, 0.02, 2, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
        />
      </mesh>

      <mesh
        ref={neon2Ref}
        rotation={[-Math.PI / 2, 0, -Math.PI * 0.9]}
        position={[1.2, 0.02, 1.5]}
      >
        <cylinderGeometry args={[0.02, 0.02, 2, 32]} />
        <meshStandardMaterial
          // emissive={isFlashing ? "#FFFFFF" : null}
          // emissiveIntensity={isFlashing ? 0 : 1}
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
        />
      </mesh>

      <group>
        <mesh
          rotation={[-Math.PI / 2, 0, -Math.PI * 2.06]}
          position={[1.5, 0.02, 3]}
        >
          <cylinderGeometry args={[0.02, 0.02, 2, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={3}
          />
        </mesh>
      </group>

      <group>
        <Tube
          rotation={[-0.3, 0, Math.PI / 2]}
          position={[2.15, -0.95, 3.895]}
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(1, 0, 0),
              new THREE.Vector3(2.2, 0, 0),
              // Ajoutez plus de points pour créer la forme de votre néon
            ]), // Ceci est la courbe qui définit la forme du néon
            64, // segments
            0.02, // rayon
          ]}
        >
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={3}
          />
        </Tube>
      </group>

      {/* BEHIND */}

      <group>
        <Tube
          rotation={[-0, (Math.PI / 2) * 0.9, 0]}
          position={[-2.8, 0.02, 2.5]}
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(1, 0, 0),
              new THREE.Vector3(2, 0, 0),
              new THREE.Vector3(3, 0, 0),
              // Ajoutez plus de points pour créer la forme de votre néon
            ]), // Ceci est la courbe qui définit la forme du néon
            64, // segments
            0.025, // rayon
          ]}
        >
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={3}
          />
        </Tube>
      </group>

      <mesh
        rotation={[-Math.PI / 2, 0, -Math.PI * 0.9]}
        position={[2.5, 0.02, 0.7]}
      >
        <cylinderGeometry args={[0.02, 0.02, 2, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
        />
      </mesh>
    </group>
  );
}
