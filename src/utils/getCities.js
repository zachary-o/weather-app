import axios from "axios";

export const getCities = async (cityName) => {
  if (!cityName) {
    return []
  }
  const response = await axios
    .get(
      `https://api.weatherapi.com/v1/search.json?key=d22b133886504c7584b174852232604&q=${cityName}`
    )
    .catch((error) => console.log(error));

  if (response) {
    const cities = response.data;
    return cities;
  } else {
    return []
  }
};
