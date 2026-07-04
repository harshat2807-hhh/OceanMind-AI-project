import { createContext, useState } from "react";

export const ArgoContext = createContext();

export function ArgoProvider({ children }) {
  const [argoData, setArgoData] = useState([]);

  return (
    <ArgoContext.Provider value={{ argoData, setArgoData }}>
      {children}
    </ArgoContext.Provider>
  );
}