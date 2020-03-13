import { useState, useEffect, useCallback } from "react";

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0
};

const useGeolocation = (watch = false, settings = defaultSettings) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = useCallback(
    ({ coords, timestamp }) => {
      setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy,
        timestamp
      });
    },
    [setPosition]
  );

  const onError = useCallback(
    error => {
      setError(error.message);
    },
    [setError]
  );

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported buy your browser");
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [settings, watch, setError, onChange, onError]);

  return { ...position, error };
};

export default useGeolocation;
