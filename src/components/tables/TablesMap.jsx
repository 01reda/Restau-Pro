import { useState } from "react";
import tablesData from "../../data/tables.json"; // Importation du fichier JSON
import "./tables.css";

export default function TablesMap() {
  const [tables, setTables] = useState(tablesData); // Utilisation des données JSON
  /*if (!localStorage.getItem("user")) {
      alert("Veuillez vous connecter pour réserver ou commander.");
      eturn;
    }*/

  const handleClick = (table) => {
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
          style={{ left: table.x, top: table.y, position: "absolute" }}
          onClick={() => handleClick(table)}
          data-info={`Table ${table.id} • ${table.seats} places`}
        >
          <div className="table-title">Table {table.id}</div>
          <div className="table-capacity">{table.seats} pers</div>
        </div>
      ))}

      {/* Légende */}
      <div className="legend">
        <span>
          <i className="free"></i> Tables libres
        </span>
        <span>
          <i className="mine"></i> Mes tables
        </span>
        <span>
          <i className="booked"></i> Tables réservées
        </span>
      </div>
    </div>
  );
}