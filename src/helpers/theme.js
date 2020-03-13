export const getWeatherBackgroundColor = temp => {
  if (temp <= -10) {
    return "#00ffff";
  } else if (temp > -10 && temp < 10) {
    // calculate color increment in edges current temperature scope
    const step = temp + 10;
    const R = (255 / 20) * step;
    const G = 255 - ((255 - 247) / 20) * step;
    const B = 255 - (255 / 20) * step;
    const color = `rgb(${R},${G},${B})`;
    return color;
  } else if (temp >= 10 && temp < 30) {
    // calculate color increment in edges current temperature scope
    const step = temp - 10;
    const R = 255;
    const G = 247 - ((247 - 140) / 20) * step;
    const B = 0;
    const color = `rgb(${R},${G},${B})`;
    return color;
  } else {
    return "#ff8c00a";
  }
};
