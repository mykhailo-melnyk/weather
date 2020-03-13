import React, { useEffect, useContext, useState, useCallback } from "react";

import { GeolocationContext } from "../providers/GeolocationProvider";
import WeatherImage from "../components/WeatherImage";
import { getLocationByGeographicCoordinates } from "../api/weatherApi";

const WeatherContainer = () => {
  const geolocation = useContext(GeolocationContext);
  const [weatherTemperature, setWeatherTemperature] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");

  const getData = useCallback(async () => {
    const result = await getLocationByGeographicCoordinates(
      geolocation.latitude,
      geolocation.longitude
    );
    setWeatherTemperature(result.data.main.temp);
    setWeatherIcon(result.data.weather[0].icon);
  }, [geolocation]);

  useEffect(() => {
    if (geolocation.latitude && geolocation.longitude) {
      getData();
    }
  }, [geolocation, getData]);

  if (!geolocation.error && !geolocation.latitude) {
    return <div>Loading...</div>;
  }

  if (geolocation.error) {
    return <div>{geolocation.error}</div>;
  }

  return (
    <div>
      {weatherIcon && <WeatherImage icon={weatherIcon} />}
      <div>{weatherTemperature}℃</div>
    </div>
  );
};

export default WeatherContainer;
