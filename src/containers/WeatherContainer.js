import React, { useEffect, useContext, useState, useCallback } from "react";

import { GeolocationContext } from "../providers/GeolocationProvider";
import { WeatherImage, TemperatureSlider } from "../components";
import { getLocationByGeographicCoordinates } from "../api/weatherApi";
import { getWeatherBackgroundColor } from "../helpers/theme";

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

  if (isLoading) {
    return <div>Loading weather...</div>;
  }
  // show loading when get geolocation in progress
  if (!geolocation.latitude && !geolocation.error) {
    return <div>Loading geolocation...</div>;
  }

  if (geolocation.error) {
    return <div>{geolocation.error}</div>;
  }

  return (
    <div
      className="h-100 w-100 d-flex flex-column  justify-content-center align-items-center"
      style={{ backgroundColor: getWeatherBackgroundColor(weatherTemperature) }}
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
