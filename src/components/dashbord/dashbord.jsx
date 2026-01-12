import { getTables } from "../../services/tableService";
import "./dashbord.css";

const Dashbord = () => {
  const tables = getTables();

  const total = tables.length;
  const reserved = tables.filter(t => t.status === "reserved" || t.status === "booked").length;
  const free = tables.filter(t => t.status === "free").length;
  const mine = tables.filter(t => t.status === "reservedByMe").length;

  return (
    <section className="dashbord-page">
      <h1 className="dashbord-title">Dashbord</h1>

      {/* === Stats === */}
      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Tables</span>
          <strong>{total}</strong>
        </div>

        <div className="stat-card yellow">
          <span>Available</span>
          <strong>{free}</strong>
        </div>

        <div className="stat-card red">
          <span>Reserved</span>
          <strong>{reserved}</strong>
        </div>

        <div className="stat-card green">
          <span>My Reservations</span>
          <strong>{mine}</strong>
        </div>
      </div>

      {/* === Tables list === */}
      <div className="dashbord-section">
        <h2>Tables Status</h2>

        <table className="dashbord-table">
          <thead>
            <tr>
              <th>Table</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tables.map(table => (
              <tr key={table.id}>
                <td>Table {table.id}</td>
                <td className={`status ${table.status}`}>
                  {table.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashbord;