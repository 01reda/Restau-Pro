/*import { useAuth } from "../../context/AuthContext";

const TableItem = ({ table, onClick }) => {
  const { user } = useAuth();

  const getStatusClass = () => {
    if (table.status === "reserved" && table.reservedBy === user.id) {
      return "mine";
    }
    if (table.status === "reserved") {
      return "reserved";
    }
    return "free";
  };

  return (
    <div
      className={`table ${getStatusClass()}`}
      style={{
        left: `${table.x}px`,
        top: `${table.y}px`
      }}
      onClick={() => onClick(table)}
    >
      Table {table.id}
    </div>
  );
};

export default TableItem;*/
