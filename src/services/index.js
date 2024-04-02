import axios from "axios";

const apiKey = "3ab7af5ac4f39937f991577ad9f3418e";
const defaultCity = "İstanbul";

const getCurrentWeather = async () => {
  try {
    let cityName = defaultCity;

    const position = await getCurrentPosition();
    if (position.coords.latitude && position.coords.longitude) {
      cityName = await getCityName(position.coords.latitude, position.coords.longitude);
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const response = await axios.get(weatherUrl);

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        console.error("Konum izni reddedildi veya hata oluştu:", error.message);
        resolve({ coords: { latitude: null, longitude: null } }); // Varsayılan değer olarak null koordinatları gönder
      }
    );
  });
};

const getCityName = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    return response.data.name;
  } catch (error) {
    console.error("Şehir adı alınamadı:", error.message); // Hata durumunda konsola hata mesajını yaz
    throw error;
  }
};

const getWeatherByCity = async (city) => {
  try {
    const weatherUrl = `https://pro.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`;
    const response = await axios.get(weatherUrl);

    return response.data;
  } catch (error) {
    console.error(`${city} için hava durumu alınamadı:`, error.message);
    throw error;
  }
};

const getFiveDayWeatherForecast = async (city) => {
  try {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}`;
    const response = await axios.get(forecastUrl);

    return response.data.list;
  } catch (error) {
    console.error("Sonraki 5 günün hava durumu alınamadı:", error.message);
    throw error;
  }
};

export { getCurrentWeather, getWeatherByCity, getFiveDayWeatherForecast };
