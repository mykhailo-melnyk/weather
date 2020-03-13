import React, { useEffect, useContext, useState, useCallback } from "react";

import { GeolocationContext } from "../providers/GeolocationProvider";
import WeatherImage from "../components/WeatherImage";
import TemperatureSlider from "../components/TemperatureSlider";
import { getLocationByGeographicCoordinates } from "../api/weatherApi";

const getBackgroundColor = temp => {
  if (temp <= -10) {
    return "#00ffff";
  } else if (temp >= 30) {
    return "#ff8c00";
  } else {
    return "#fff700";
  }
};

const WeatherContainer = () => {
  const geolocation = useContext(GeolocationContext);
  const [weatherTemperature, setWeatherTemperature] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    const result = await getLocationByGeographicCoordinates(
      geolocation.latitude,
      geolocation.longitude
    );
    setWeatherTemperature(result.data.main.temp);
    setWeatherIcon(result.data.weather[0].icon);
    setIsLoading(false);
  }, [geolocation]);

  useEffect(() => {
    if (geolocation.latitude && geolocation.longitude) {
      setIsLoading(true);
      getData();
    }
  }, [geolocation, getData]);

  if ((!geolocation.latitude && !geolocation.error) || isLoading) {
    return <div>Loading...</div>;
  }

  if (geolocation.error) {
    return <div>{geolocation.error}</div>;
  }

  return (
    <div
      className="h-100 w-100 d-flex flex-column  justify-content-center align-items-center"
      style={{ backgroundColor: getBackgroundColor(weatherTemperature) }}
    >
      {weatherIcon && <WeatherImage icon={weatherIcon} />}
      <div>{weatherTemperature}℃</div>
      <TemperatureSlider
        value={weatherTemperature}
        onChange={setWeatherTemperature}
      />
    </div>
  );
};

export default WeatherContainer;
