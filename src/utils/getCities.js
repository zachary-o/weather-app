import axios from "axios";

export const getCities = async (cityName) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/search.json?key=d22b133886504c7584b174852232604&q=${cityName}`
  );

  const cities = response.data;
  // console.log(cities)
  return cities;
};
