import { useState, useEffect } from "react";
import { getCityWeather } from "../../utils/getCityWeather";

import "./styles.css";
import image from "../../assets/images/sunny.svg";

const LeftPanel = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getCityWeather();
        setWeather({
          current: data.current,
          location: data.location,
        });
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  

  return (
    <section className="left-panel-container">
      {weather.current && weather.location ? (
        <div className="data-container">
          <img src={image} alt="weather image" />
          <div className="text-data-container">
            <h1>
              {weather.current.temp_c}
              <span>&#8451;</span>
            </h1>
            <h3>{weather.location.name}</h3>
            <h5>{weather.current.condition.text}</h5>
            <h5>{weather.location.localtime}</h5>
          </div>
        </div>
      ) : (
        <div>Loading weather data...</div>
      )}
    </section>
  );
};

export default LeftPanel;
