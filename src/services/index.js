import axios from "axios";

const apiKey = "3ab7af5ac4f39937f991577ad9f3418e";

const getCurrentWeather = async (city = "") => {
  try {
    let cityName = city.trim();

    if (!cityName) {
      const position = await getCurrentPosition();
      if (position.coords.latitude && position.coords.longitude) {
        cityName = await getCityName(
          position.coords.latitude,
          position.coords.longitude
        );
      } else {
        // Konum izni reddedilirse
        cityName = "İstanbul";
      }
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
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
        resolve({ coords: { latitude: null, longitude: null } });
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
    console.error("Şehir adı alınamadı:", error.message);
    throw error;
  }
};

const getWeatherForCities = async (cities) => {
  try {
    // API'ye yapılan tüm istekleri Promise.all ile toplu olarak beklemek için
    const weatherPromises = cities.map((city) => {
      // API URL'sini oluştur
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      // API'den verileri al
      return axios.get(weatherUrl);
    });

    // Tüm isteklerin sonuçlarını bekle ve al
    const responses = await Promise.all(weatherPromises);

    // Tüm sonuçlardan verileri çıkar ve döndür
    return responses.map((response) => response.data);
  } catch (error) {
    console.error("Hava durumu verileri alınamadı:", error.message);
    throw error;
  }
};

export {
  getCurrentWeather,
  getCurrentPosition,
  getCityName,
  getWeatherForCities,
};
