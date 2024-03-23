import axios from "axios";

const apiKey = "3ab7af5ac4f39937f991577ad9f3418e";
const defaultCity = "istanbul"; 

const getWeather = async () => {
  try {
    const position = await getCurrentPosition();
    const cityFromLocation = await getCityName(
      position.coords.latitude,
      position.coords.longitude
    );
    const cityName = cityFromLocation || defaultCity;

    const weatherUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    const response = await axios.get(weatherUrl);

    return response.data;
  } catch (error) {
    console.error("Hava durumu alınamadı:", error.message);
    throw error;
  }
};

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getCityName = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey
    );
    return response.data.name;
  } catch (error) {
    console.error("Şehir adı alınamadı:", error.message);
    throw error;
  }
};

export { getWeather };
