import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TemperatureSlider = ({ value, onChange }) => (
  <div className="slider">
    <Slider value={value} onChange={onChange} min={-50} max={50} />
  </div>
);

export default TemperatureSlider;
