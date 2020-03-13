import React from "react";
import PropTypes from "prop-types";

import { BASE_URL } from "../helpers/constants";

const WeatherImage = ({ icon }) => (
  <img src={`${BASE_URL}/img/wn/${icon}@2x.png`} alt="weather icon"></img>
);

WeatherImage.propTypes = {
  icon: PropTypes.string
};

WeatherImage.defaultProps = {
  icon: "01n"
};

export default WeatherImage;
