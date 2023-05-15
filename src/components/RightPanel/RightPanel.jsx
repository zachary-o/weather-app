import { useState, useEffect } from "react";
import { getCities } from "../../utils/getCities";

import HourlyForecast from "../HourlyForecast/HourlyForecast";

import "./styles.css";
import sun from "../../assets/icons/sunrise.svg";
import arrow from "../../assets/icons/arrow.svg";
import curve from "../../assets/icons/curve.svg";


import Search from "../Search/Search";

const RightPanel = ({ weather, setWeather }) => {
  const [searchCity, setSearchCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const data = await getCities(searchCity);
        setSearchResults(data);
      } catch (error) {
        console.log("Error fetching search query:", error);
      }
    };
    fetchSearchResults();
  }, [searchCity]);

  return (
    <section>
      {weather.current && weather.forecast ? (
        <div
          className={
            searchResults.length > 0
              ? "right-panel-container-active"
              : "right-panel-container"
          }
        >
          <Search
            searchResults={searchResults}
            setWeather={setWeather}
            searchCity={searchCity}
            setSearchCity={setSearchCity}
          />

          <hr
            className={
              (searchResults.length > 0
                ? "hr-active"
                : "")
            }
          />
          <HourlyForecast weather={weather.forecast.forecastday[0].hour} />
          <hr />
          <div className="weather-data">
            <div className="left-column">
              <div className="single-data">
                <p className="single-data-key">Max. temperature</p>
                <p className="single-data-value">
                  {weather.forecast.forecastday[0].day.maxtemp_c}
                  <sup>&#8451;</sup>
                </p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Min. temperature</p>
                <p className="single-data-value">
                  {weather.forecast.forecastday[0].day.mintemp_c}
                  <sup>&#8451;</sup>
                </p>
              </div>
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
                <p className="single-data-key">Wind direction</p>
                <p className="single-data-value">{weather.current.wind_dir}</p>
              </div>
            </div>
            <div className="right-column">
              <div className="single-data">
                <p className="single-data-key">Humidity</p>
                <p className="single-data-value">{weather.current.humidity}%</p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Visibility</p>
                <p className="single-data-value">{weather.current.vis_km} km</p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Pressure </p>

                <p className="single-data-value" style={{ display: "flex" }}>
                  <img src={arrow} alt="" className="single-data-value" />
                  {weather.current.pressure_mb} mb
                </p>
              </div>
              <div className="single-data">
                <p className="single-data-key">Precipitation </p>
                <p className="single-data-value">
                  {weather.current.precip_mm} mm
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
            </div>
          </div>
          <hr />
          <div className="sunrise-sunset-container">
            <img src={curve} alt="curve" className="curve" />
            <div className="sunrise-sunset">
              <div className="sunrise">
                <img
                  src={arrow}
                  alt=""
                  style={{ transform: "rotate(180deg)" }}
                />
                <img src={sun} alt="" />
                <p className="sun-p">
                  {weather.forecast.forecastday[0].astro.sunrise}
                </p>
              </div>
              <div className="sunset">
                <img src={arrow} alt="" />
                <img src={sun} alt="" />
                <p className="sun-p">
                  {weather.forecast.forecastday[0].astro.sunset}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};
export default RightPanel;
