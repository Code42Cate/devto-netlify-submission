import { Image, Text, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useLocation, useRoute } from "wouter";

const GOLDEN_RATIO = 1.61803398875;

export function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
  setShowDownloadModal,
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(Number(params?.id));
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
          clicked.current === e.object
            ? "/"
            : "/item/" + encodeURIComponent(e.object.name)
        );
      }}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map(
        (props) => <Frame key={props.url} setShowDownloadModal={setShowDownloadModal} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

export function Frame({
  description,
  title,
  imageId,
  url,
  setShowDownloadModal,
  c = new THREE.Color(),
  ...props
}) {
  const image = useRef();
  const frame = useRef();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [descriptionSize, setDescriptionSize] = useState([0, 0, 0]);
  const descriptionRef = useRef(null);
  const isActive = Number(params?.id) == imageId;

  useCursor(hovered);
  useFrame((state, dt) => {
    if (isActive) {
      state.camera.zoom = 1;
      state.camera.updateProjectionMatrix();
      easing.dampC(frame.current.material.color, "white", 0.1, dt);
      // remove

      if (descriptionRef.current) {
        const { x, y, z } = descriptionRef.current.geometry.boundingBox.min;
        if (
          x === descriptionSize[0] &&
          y === descriptionSize[1] &&
          z === descriptionSize[2]
        )
          return;
        setDescriptionSize([x, y, z]);
        console.log(x, y, z);
      }

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
    <group {...props} userData={{ url }}>
      <mesh
        name={imageId}
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
          scale={[1, 1.61, 1]}
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
      <Text
        maxWidth={0.8}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDEN_RATIO, 0]}
        fontSize={0.03}
        font="https://cdn.jsdelivr.net/fontsource/fonts/merriweather@latest/latin-700-normal.woff"
        color={hovered ? "#c23a67" : "black"}
      >
        {title}
      </Text>
      {isActive && (
        <>
          <Text
            maxWidth={0.4}
            anchorX="left"
            ref={descriptionRef}
            anchorY="top"
            position={[0.55, GOLDEN_RATIO - 0.05, 0]}
            fontSize={0.025}
            font="https://cdn.jsdelivr.net/fontsource/fonts/merriweather@latest/latin-400-normal.woff"
            color={"black"}
          >
            {description}
          </Text>
          {descriptionSize[1] !== undefined && (
            <mesh
              onClick={(e) => {
                setShowDownloadModal(true);
                e.stopPropagation();
              }}
              position={[0.65, GOLDEN_RATIO + descriptionSize[1] - 0.15, 0]}
            >
              <boxGeometry args={[0.2, 0.08, 0.02]} />
              <meshStandardMaterial color="white" />
              <Text
                position={[-0.01, 0, 0.03]}
                fontSize={0.04}
                color="black"
                font="https://cdn.jsdelivr.net/fontsource/fonts/merriweather@latest/latin-700-normal.woff"
              >
                Save
              </Text>
            </mesh>
          )}
        </>
      )}
    </group>
  );
}
