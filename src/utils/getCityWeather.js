import axios from "axios";

const BASE_URL = " https://api.weatherapi.com/v1";

export const getCityWeather = async (searchCity) => {
  if (!searchCity) {
    searchCity = "Kiev";
  }
  const response = await axios.get(
    `${BASE_URL}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchCity}&days=1&aqi=no&alerts=no`
  );

  const cityWeather = response.data;
  return cityWeather;
};
