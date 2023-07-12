import axios from "axios";

export const getLocation = async () => {
  const response = await axios.get("http://ip-api.com/json");

  const myLocation = response.data.city;
  return myLocation;
};
