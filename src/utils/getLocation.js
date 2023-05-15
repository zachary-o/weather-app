import axios from "axios";

export const getLocation = async () => {
  const location = await axios.get("https://ipapi.co/json");
  console.log(location.data.city);
  return location.data;
};
