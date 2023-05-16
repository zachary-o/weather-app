import axios from "axios";

export const getLocation = async () => {
  const response = await axios.get("https://ipapi.co/json");
  
  const myLocation = response.data.city;
  return myLocation;
};
