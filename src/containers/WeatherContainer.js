import React, { useEffect, useContext } from "react";

import { GeolocationContext } from "../providers/GeolocationProvider";

const WeatherContainer = () => {
  const geolocation = useContext(GeolocationContext);
  console.log("WeatherContainer", geolocation);
  useEffect(() => {}, []);

  if (!geolocation.error && !geolocation.latitude) {
    return <div>Loading...</div>;
  }

  if (geolocation.error) {
    return <div>{geolocation.error}</div>;
  }

  return (
    <div>
      latitude: {geolocation.latitude}
      longitude: {geolocation.longitude}
    </div>
  );
};

export default WeatherContainer;
