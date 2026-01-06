import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./tables3D.css";

const initialTables = [
  { id: 1, position: [-3, 0, 2], status: "reservedByMe" },
  { id: 2, position: [0, 0, 2], status: "free" },
  { id: 3, position: [3, 0, 2], status: "booked" },
  { id: 4, position: [-3, 0, -2], status: "free" },
  { id: 5, position: [0, 0, -2], status: "free" },
  { id: 6, position: [3, 0, -2], status: "booked" },
];

const Table = ({ position, status, onClick }) => {
  const colorMap = {
    free: "#FFD700",
    reservedByMe: "#32CD32",
    booked: "#FF4C4C",
  };

  return (
    <mesh position={position} onClick={onClick} castShadow>
      <cylinderBufferGeometry args={[1, 1, 0.6, 32]} />
      <meshStandardMaterial color={colorMap[status]} />
    </mesh>
  );
};

const Tables3D = () => {
  const [tables, setTables] = useState(initialTables);

  const handleClick = (table) => {
    if (!localStorage.getItem("user")) {
      alert("Veuillez vous connecter pour réserver ou commander.");
      return;
    }

    if (table.status === "free") {
      const updated = tables.map((t) =>
        t.id === table.id ? { ...t, status: "reservedByMe" } : t
      );
      setTables(updated);
    } else if (table.status === "reservedByMe") {
      const updated = tables.map((t) =>
        t.id === table.id ? { ...t, status: "free" } : t
      );
      setTables(updated);
    } else {
      alert("Cette table est déjà réservée.");
    }
  };

  return (
    <Canvas
  shadows
  camera={{ position: [0, 15, 0], fov: 50 }}
  style={{ width: "100%", height: "600px", borderRadius: "20px" }}
>
  {/* Lumières */}
  <ambientLight intensity={0.5} />
  <directionalLight
    position={[0, 20, 0]}
    intensity={1}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
  />

  {/* Sol */}
  <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <planeBufferGeometry args={[20, 20]} />
    <meshStandardMaterial color="#222" />
  </mesh>

  {/* Tables */}
  {tables.map((table) => (
    <Table
      key={table.id}
      position={table.position}
      status={table.status}
      onClick={() => handleClick(table)}
    />
  ))}

  {/* Contrôle de vue */}
  <OrbitControls
    enablePan={true}
    enableRotate={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}
  />
</Canvas>

  );
};

export default Tables3D;
