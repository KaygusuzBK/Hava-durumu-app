import React from "react";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState, useLayoutEffect } from "react";
import { weatherConfig } from "~/enums";
import WeatherItem from "~/components/WeatherItem/index";
import {
  CloudRain,
  ThermometerSimple,
  Wind,
  Drop,
  Sun,
} from "@phosphor-icons/react";
import Logo from "~/assets/img/Logo.svg";

function WeatherCard({ weather, fiveDayWeather }) {
  console.log(weather);
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
    <div className="flex flex-col justify-center items-center bg-black rounded-lg p-2">
      <div className="flex flex-col justify-between items-start  h-[305px] w-[305px] bg-gray-950 rounded-xl p-4 text-white">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="text-4xl">{weather.name}</div>
          <div>{weather.weather[0].description}</div>
          <div>{weather.dt_txt}</div>
        </div>
        <div className="flex justify-between items-end w-full h-full gap-4">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="text-3xl pl-0.5">
              {kelvinToCelsius(weather.main.temp)}°C
            </div>
            <div className="flex gap-2 text-xs">
              {kelvinToCelsius(weather.main.temp_max)}°C /
              {kelvinToCelsius(weather.main.temp_min)}°C
            </div>
            <div className="text-xs">{weather.weather[0].description}</div>
          </div>
          <div>
            <img src={Logo} alt="weather" className="w-24 h-24" />
          </div>
        </div>
      </div>
      <br />
      {/* 2. Kısım */}
      <div className="flex flex-col items-center justify-center bg-gray-950 rounded-xl gap-2 p-4">
        <WeatherItem
          icon={<ThermometerSimple />}
          label="Thermal sensation"
          value={`${kelvinToCelsius(weather.main.temp)}°C`}
        />
        <hr className="w-60 border -m-2 border-gray-900" />
        <WeatherItem
          icon={<CloudRain />}
          label="Probality of rain"
          value={`${weather.main.temp}°C`}
        />
        <hr className="w-60 border -m-2 border-gray-900" />
        <WeatherItem
          icon={<Wind />}
          label="Wind speed"
          value={`${mpsToKph(weather.wind.speed)} km/h`}
        />
        <hr className="w-60 border -m-2 border-gray-900" />
        <WeatherItem
          icon={<Drop />}
          label="Air humidity"
          value={`${weather.main.humidity}%`}
        />
        <hr className="w-60 border -m-2 border-gray-900" />
        <WeatherItem
          icon={<Sun />}
          label="UV index"
          value={`${weather.main.temp}°C`}
        />
      </div>
      {/* 3. KISIM */}
      ""{" "}
      <div className="flex flex-wrap rounded-xl  p-4 mt-4">
        {fiveDayWeather &&
          isMobile &&
          fiveDayWeather.map((weather, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-full text-white text-sm mr-2 px-3 py-1 mb-2"
            >
              <div>{weather.dt_txt.slice(5, 10)}</div>
              <img src={weatherConfig.rain.DayBgImagePath} alt="weather" />
              <div>{mpsToKph(weather.main.temp_max)}°C</div>
              <div>{mpsToKph(weather.main.temp_min)}°C</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WeatherCard;
