import { getTables } from "../../services/tableService";

const Dashboard = () => {
  const tables = getTables();

  const total = tables.length;
  const reserved = tables.filter(t => t.status === "reserved").length;
  const free = total - reserved;

  return (
    <div className="glass-card">
      <h2>Dashboard</h2>
      <p>Total Tables: {total}</p>
      <p>Reserved: {reserved}</p>
      <p>Available: {free}</p>
    </div>
  );
};

export default Dashboard;
