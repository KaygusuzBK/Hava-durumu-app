import React from "react";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState, useLayoutEffect } from "react";
import { weatherConfig } from "~/enums";

function WeatherCard({ weather, fiveDayWeather }) {
  console.log(weather);
  let time = new Date();
  if (!weather) {
    return (
      <div className="text-white text-3xl justify-center items-center">
        Loading...
      </div>
    );
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // Ekrana göre boyutlandırma
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  const mpsToKph = (mps) => {
    return (mps * 3.6).toFixed(2); // 1 m/s = 3.6 km/h
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col px-20 py-20 bg-gray-600 justify-start items-center"
        style={{
          backgroundImage: `url(${weatherConfig.clear.DayBgImagePath})`,
        }}
      >
        <div className="flex flex-col">
          {/*  Şehir */}
          <div className="text-white text-xl flex items-center">
            {weather.name} {weather.sys.country}
          </div>
          {/* Zamanlar  */}
          <div className="text-white ">
            {
              time.toDateString().slice(0, 3) + // Günün adı
                ", " +
                time.toDateString().slice(4, 7) + // ayın adı
                ", " +
                time.toDateString().slice(8, 10) + // günün tarihi
                ", " +
                time.toDateString().slice(11, 15) // yıl
            }
          </div>
        </div>
        <div>{weather.name}</div>
      </div>
      <br />
      {/* 2. Kısım */}
      <div className="flex flex-col items-center justify-center  bg-gray-950 p-4 rounded-lg">
        <div className="text-white text-3xl">
          {kelvinToCelsius(weather.main.feels_like)}°C
        </div>
        <hr className="w-full border-1 border-white" />
        <div className="text-white text-3xl">{weather.main.humidity}% Nem</div>
        <hr className="w-full border-1 border-white" />
        <div className="text-white text-3xl">
          {mpsToKph(weather.wind.speed)} km/h
        </div>
        <hr className="w-full border-1 border-white" />
        <div className="text-white text-3xl"></div>
        <hr className="w-full border-1 border-white" />
      </div>
      {/* 3. KISIM */}
      <div className="flex flex-wrap rounded">
        {fiveDayWeather &&
          isMobile &&
          fiveDayWeather.map((weather, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-full bg-blue-500 text-white text-sm mr-2 px-3 py-1 mb-2"
            >
              {weather.main.feels_like}°C
            </div>
          ))}
      </div>
    </div>
  );
}

export default WeatherCard;
