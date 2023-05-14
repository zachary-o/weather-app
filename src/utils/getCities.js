import axios from "axios";

const BASE_URL = " https://api.weatherapi.com/v1";

export const getCities = async (cityName) => {
  if (!cityName) {
    return []
  }
  const response = await axios
    .get(
      `${BASE_URL}/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}`
    )
    .catch((error) => console.log(error));

  if (response) {
    const cities = response.data;
    return cities;
  } else {
    return []
  }
};
