import axios from "axios";

import { BASE_URL_API, OPEN_WEATHER_API_KEY } from "../helpers/constants";

export const getLocationByGeographicCoordinates = (lat, long) =>
  axios.get(
    `${BASE_URL_API}/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  );
