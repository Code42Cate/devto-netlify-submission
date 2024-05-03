import { Tube } from "@react-three/drei";
import React from "react";
import { useRef } from "react";
import * as THREE from "three";

export function NeonLight() {
  const neon2Ref = useRef();

  return (
    <group>
      <mesh rotation={[0, 0, 0.5]} position={[-0.035, 0.445, -0.6]}>
        <cylinderGeometry args={[0.012, 0.012, 1, 32]} />
        <meshStandardMaterial
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
