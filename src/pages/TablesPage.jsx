import TablesMap from "../components/tables/TablesMap";
import "../components/tables/tables.css";

const TablesPage = () => {
  return (
    <div className="reservation-page dark-bg">
      <h1>Sélectionnez votre table</h1>
      <p className="subtitle">
        Choisissez une table disponible pour réserver ou commander
      </p>

      <TablesMap />
    </div>
  );
};

export default TablesPage;
