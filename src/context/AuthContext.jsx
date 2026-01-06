import { createContext, useContext } from "react";

const AuthContext = createContext();

const fakeUser = {
  id: 1,
  name: "Taha",
  role: "client"
};

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: fakeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
