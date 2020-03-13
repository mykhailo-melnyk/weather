import React from "react";

import WeatherContainer from "./containers/WeatherContainer";
import { GeolocationProvider } from "./providers/GeolocationProvider";

function App() {
  return (
    <div className="App">
      <GeolocationProvider>
        <WeatherContainer />
      </GeolocationProvider>
    </div>
  );
}

export default App;
