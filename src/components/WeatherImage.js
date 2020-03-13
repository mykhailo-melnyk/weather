import React from "react";

import { BASE_URL } from "../helpers/constants";

const WeatherImage = ({ icon }) => (
  <img src={`${BASE_URL}/img/wn/${icon}@2x.png`} alt="weather icon"></img>
);

export default WeatherImage;
