import React from "react";

import WeatherContainer from "./containers/WeatherContainer";
import { GeolocationProvider } from "./providers/GeolocationProvider";

function App() {
  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
      <GeolocationProvider>
        <WeatherContainer />
      </GeolocationProvider>
    </div>
  );
}

export default App;
