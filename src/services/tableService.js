import tablesData from "../data/tables.json";

const STORAGE_KEY = "restaurant_tables";

export const getTables = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tablesData));
  return tablesData;
};

export const saveTables = (tables) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tables));
};
