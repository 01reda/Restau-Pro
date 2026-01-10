import { useState } from "react";
import "./tables.css";

// Tables avec positions x/y et nombre de places
const initialTables = [
  { id: 1, x: 100, y: 100, seats: 6, status: "free" },
  { id: 2, x: 225, y: 100, seats: 6, status: "free" },
  { id: 3, x: 350, y: 100, seats: 6, status: "booked" },
  { id: 9, x: 475, y: 100, seats: 6, status: "booked" },
  { id: 3, x: 600, y: 100, seats: 6, status: "booked" },

  { id: 4, x: 100, y: 250, seats: 4, status: "free" },
  { id: 5, x: 225, y: 250, seats: 4, status: "booked" },
  { id: 6, x: 350, y: 250, seats: 4, status: "free" },
  { id: 7, x: 475, y: 250, seats: 4, status: "free" },
  { id: 8, x: 600, y: 250, seats: 4, status: "free" },
];

export default function TablesMap() {
  const [tables, setTables] = useState(initialTables);

  const handleClick = (table) => {
    /*if (!localStorage.getItem("user")) {
      alert("Veuillez vous connecter pour réserver ou commander.");
      eturn;
    }*/

    if (table.status === "free") {
      setTables((prev) =>
        prev.map((t) => (t.id === table.id ? { ...t, status: "mine" } : t))
      );
    } else if (table.status === "mine") {
      setTables((prev) =>
        prev.map((t) => (t.id === table.id ? { ...t, status: "free" } : t))
      );
    } else {
      alert("Cette table est déjà réservée.");
    }
  };

  return (
    <div className="tables-wrapper">
      {/* Comptoir */}
      <div className="counter">Comptoir</div>

      {/* Tables */}
      {tables.map((table) => (
        <div
          key={table.id}
          className={`table-seat ${table.status}`}
          style={{ position: "absolute", left: table.x, top: table.y }}
          onClick={() => handleClick(table)}
        >
          {table.seats}
        </div>
      ))}

      {/* Légende */}
      <div className="legend">
        <span><i className="free"></i> Tables libres</span>
        <span><i className="mine"></i> Mes tables</span>
        <span><i className="booked"></i> Tables réservées</span>
      </div>
    </div>
  );
}
