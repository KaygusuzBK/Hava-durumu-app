import React, { useState, useEffect } from "react";
import { getWeatherForCities } from "~/services";
import { kelvinToCelsius, dayOrNight } from "~/utils/utils";

export default function AllWeather() {
  const cities = [
    "New York",
    "Istanbul",
    "London",
    "Tokyo",
    "Moscow",
    "Paris",
    "Berlin",
    "Madrid",
    "Rome",
    "Sydney",
  ];

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await getWeatherForCities(cities);
        setWeatherData(weatherData);
      } catch (error) {
        console.error("Hava durumu verileri alınamadı:", error.message);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center animate-scrollRight whitespace-nowrap space-x-4 text-myGray-white">
        {weatherData.map((weather, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-md shadow-md bg-myGray-500 border border-gray-300 w-[150px] p-4 mb-4"
          >
            <img
              src={
                "/src/assets/img/Weather-icons/" +
                weather.weather[0].description +
                "-" +
                dayOrNight() +
                ".svg"
              }
              alt={weather.weather[0].description}
              className="w-16 h-16"
            />
            <h2 className="text-md font-bold">{cities[index]}</h2>
            <p className="text-md">{kelvinToCelsius(weather.main.temp)}°C</p>
            <p className="text-md">{weather.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
