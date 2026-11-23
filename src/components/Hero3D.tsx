"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/** Rounded triangle shape (corner radius r) from three points. */
function roundedTriangle(pts: [number, number][], r: number) {
  const s = new THREE.Shape();
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = new THREE.Vector2(...pts[(i - 1 + n) % n]);
    const p1 = new THREE.Vector2(...pts[i]);
    const p2 = new THREE.Vector2(...pts[(i + 1) % n]);
    const a = p0.clone().sub(p1).normalize().multiplyScalar(r).add(p1);
    const b = p2.clone().sub(p1).normalize().multiplyScalar(r).add(p1);
    if (i === 0) s.moveTo(a.x, a.y);
    else s.lineTo(a.x, a.y);
    s.quadraticCurveTo(p1.x, p1.y, b.x, b.y);
  }
  s.closePath();
  return s;
}

function Mark() {
  const group = useRef<THREE.Group>(null);
  const pieces = useRef<THREE.Mesh[]>([]);

  const geo = useMemo(() => {
    // Top triangle of the mark, centred on origin (logo units / 40)
    const shape = roundedTriangle([[-0.82, 1], [0.82, 1], [0, 0.15]], 0.12);
    const g = new THREE.ExtrudeGeometry(shape, { depth: 0.28, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.08, bevelSegments: 6, curveSegments: 18 });
    g.center();
    g.translate(0, 0.58, 0);
    return g;
  }, []);

  const blue = useMemo(
    () => new THREE.MeshPhysicalMaterial({ color: "#2b2bff", roughness: 0.12, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.08, emissive: "#1010aa", emissiveIntensity: 0.35, sheen: 1, sheenColor: new THREE.Color("#8fa2ff") }),
    []
  );
  const navy = useMemo(
    () => new THREE.MeshPhysicalMaterial({ color: "#121a5c", roughness: 0.18, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1, emissive: "#050a30", emissiveIntensity: 0.4 }),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const g = group.current;
    if (!g) return;
    const px = state.pointer.x;
    const py = state.pointer.y;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, px * 0.6 + Math.sin(t * 0.4) * 0.25, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -py * 0.4 + Math.cos(t * 0.3) * 0.1, 0.05);
    g.position.y = Math.sin(t * 0.8) * 0.08;
    // "breathing" separation of the four glass pieces
    const spread = 0.06 + (Math.sin(t * 0.9) + 1) * 0.06 + Math.hypot(px, py) * 0.1;
    pieces.current.forEach((m, i) => {
      const ang = (i * Math.PI) / 2;
      m.position.set(-Math.sin(ang) * spread, Math.cos(ang) * spread, 0);
    });
  });

  return (
    <group ref={group} scale={1.55}>
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          ref={(m) => {
            if (m) pieces.current[i] = m;
          }}
          geometry={geo}
          material={i % 2 === 0 ? blue : navy}
          rotation={[0, 0, (i * Math.PI) / 2]}
        />
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} aria-hidden>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#ccff00" />
      <pointLight position={[4, 2, 2]} intensity={25} color="#3d5afe" />
      <pointLight position={[0, 0, -3]} intensity={20} color="#ccff00" />
      <Mark />
    </Canvas>
  );
}
