import React, { useMemo } from "react";

import usePosition from "../hooks/useGeolocation";

export const GeolocationContext = React.createContext();

export const GeolocationProvider = ({ children }) => {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition();
  console.log("latitude:", latitude);
  console.log("longitude:", longitude);
  console.log("timestamp:", timestamp);
  console.log("accuracy:", accuracy);
  console.log("error:", error);
  const value = useMemo(
    () => ({ latitude, longitude, timestamp, accuracy, error }),
    [latitude, longitude, timestamp, accuracy, error]
  );
  return (
    <GeolocationContext.Provider value={value}>
      {children}
    </GeolocationContext.Provider>
  );
};
