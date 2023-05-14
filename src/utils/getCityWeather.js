import axios from "axios";

export const getCityWeather = async (searchCity) => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=d22b133886504c7584b174852232604&q=${searchCity}&days=1&aqi=no&alerts=no`
  );

  const cityWeather = response.data;
  return cityWeather;
};