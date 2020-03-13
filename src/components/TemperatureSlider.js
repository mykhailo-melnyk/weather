import React from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TemperatureSlider = ({ value, onChange }) => (
  <div className="slider">
    <Slider value={value} onChange={onChange} min={-50} max={50} />
  </div>
);

TemperatureSlider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};

TemperatureSlider.defaultProps = {
  value: 0,
  onChange: () => {}
};

export default TemperatureSlider;
