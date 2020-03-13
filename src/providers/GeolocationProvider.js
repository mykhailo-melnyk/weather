import React from "react";

import useGeolocation from "../hooks/useGeolocation";

export const GeolocationContext = React.createContext();

export const GeolocationProvider = ({ children }) => {
  const value = useGeolocation();
  return (
    <GeolocationContext.Provider value={value}>
      {children}
    </GeolocationContext.Provider>
  );
};
