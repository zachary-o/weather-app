import { useState, useEffect } from "react";
import { getCityWeather } from "../../utils/getCityWeather";
import { getCities } from "../../utils/getCities";

import HourlyForecast from "../HourlyForecast/HourlyForecast";

import "./styles.css";
import sun from "../../assets/icons/sunrise.svg";
import arrow from "../../assets/icons/arrow.svg";

const RightPanel = () => {
  // const handleSearch = (event) => {
  //   const searchInput = event.target.value;
  //   getCities(searchInput);
  // };

  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getCityWeather();
        setWeather({
          current: data.current,
          forecast: data.forecast,
        });
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);
  return (
  
    <section>
      {weather.current && weather.forecast ? (
        <div className="right-panel-container">
          <div className="search-container">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5Z"
                stroke="#2F2219"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" placeholder="City" className="search" />
          </div>
          <hr />
          <div className="weather-data">
            <div className="left-column">
              <div className="single-data">
                <p className="single-data-key">UV</p>
                <p className="single-data-value">{weather.current.uv}</p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Wind</p>
                <p className="single-data-value">
                  {weather.current.wind_kph} km/h
                </p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Humidity</p>
                <p className="single-data-value">{weather.current.humidity}%</p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Visibility</p>
                <p className="single-data-value">{weather.current.vis_km} km</p>
              </div>
            </div>
            <div className="right-column">
              <div className="single-data">
                <p className="single-data-key">Pressure </p>

                <p className="single-data-value" style={{ display: "flex" }}>
                  <img src={arrow} alt="" className="single-data-value" />
                  {weather.current.pressure_mb} mb
                </p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Moon Phase</p>
                <p className="single-data-value">
                  {weather.forecast.forecastday[0].astro.moon_phase
                    .split(" ")
                    .map((el) => el.slice(0, 3) + ".")
                    .join(" ")}
                </p>
              </div>
              <div className="sunrise-sunset-container">
                <div className="sunrise-sunset">
                  <div className="sunrise">
                    <img
                      src={arrow}
                      alt=""
                      style={{
                        width: "20px",
                        transform: "rotate(180deg)",
                      }}
                    />
                    <img src={sun} alt="" />
                    <p>{weather.forecast.forecastday[0].astro.sunrise}</p>
                  </div>
                  <div className="sunset">
                    <img
                      src={arrow}
                      alt=""
                      style={{
                        width: "20px",
                      }}
                    />
                    <img src={sun} alt="" />
                    <p>{weather.forecast.forecastday[0].astro.sunset}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-second" />
        </div>
      ) : (
        <div>Loading weather data...</div>
      )}
    </section>
  );
};
export default RightPanel;
