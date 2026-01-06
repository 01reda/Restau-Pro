import { useState } from "react";
import "./tables.css";

const ROWS = 6;
const COLS = 12;

const createTables = () => {
  const tables = [];
  let id = 1;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      tables.push({
        id: id++,
        row: r,
        col: c,
        status:
          Math.random() > 0.8
            ? "booked"
            : Math.random() > 0.5
            ? "free"
            : "free",
      });
    }
  }
  return tables;
};

export default function TablesMap() {
  const [tables, setTables] = useState(createTables());

  const handleClick = (table) => {
    if (!localStorage.getItem("user")) {
      alert("Veuillez vous connecter pour réserver ou commander.");
      return;
    }

    if (table.status === "free") {
      setTables((prev) =>
        prev.map((t) =>
          t.id === table.id ? { ...t, status: "mine" } : t
        )
      );
    } else if (table.status === "mine") {
      setTables((prev) =>
        prev.map((t) =>
          t.id === table.id ? { ...t, status: "free" } : t
        )
      );
    } else {
      alert("Cette table est déjà réservée.");
    }
  };

  return (
    <div className="tables-wrapper">
      <div className="tables-grid">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`table-seat ${table.status}`}
            onClick={() => handleClick(table)}
          />
        ))}
      </div>

      <div className="legend">
        <span><i className="free"></i> Tables libres</span>
        <span><i className="mine"></i> Mes tables</span>
        <span><i className="booked"></i> Tables réservées</span>
      </div>
    </div>
  );
}
