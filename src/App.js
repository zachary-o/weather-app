import { useState, useEffect } from "react";
import { getCityWeather } from "./utils/getCityWeather";

import RightPanel from "./components/RightPanel/RightPanel";
import LeftPanel from "./components/LeftPanel/LeftPanel";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getCityWeather("Lviv");
        setWeather(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="container">
      <LeftPanel weather={weather} />
      <RightPanel weather={weather} setWeather={setWeather} />
    </div>
  );
}

export default App;
