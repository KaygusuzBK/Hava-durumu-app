import React from "react";
import { useEffect, useState } from "react";
import CardHeader from "~/components/WeatherCard/CardHeader/index";
import CardFooter from "~/components/WeatherCard/CardFooter/index";
import WeatherItem from "~/components/WeatherItem/index";
import {
  CloudRain,
  ThermometerSimple,
  Wind,
  Drop,
  Sun,
} from "@phosphor-icons/react";

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
    <div className="flex flex-col justify-center items-center bg-myGray-900 rounded-xl p-2 w-[359px]">
      <CardHeader weather={weather} />
      <br />
      <div className="flex flex-col items-center justify-center bg-myGray-800 rounded-xl gap-2 w-[359px]">
        <WeatherItem
          icon={<ThermometerSimple />}
          label="Thermal sensation"
          value={`${kelvinToCelsius(weather.main.temp)}°C`}
        />
        <hr className="w-[327px] border -m-2 border-gray-900" />
        <WeatherItem
          icon={<CloudRain />}
          label="Probality of rain"
          value={`${weather.main.temp}°C`}
        />
        <hr className="w-[327px] border -m-2 border-gray-900" />
        <WeatherItem
          icon={<Wind />}
          label="Wind speed"
          value={`${mpsToKph(weather.wind.speed)} km/h`}
        />
        <hr className="w-[327px] border -m-2 border-gray-900" />
        <WeatherItem
          icon={<Drop />}
          label="Air humidity"
          value={`${weather.main.humidity}%`}
        />
        <hr className="w-[327px] border -m-2 border-gray-900" />
        <WeatherItem
          icon={<Sun />}
          label="UV index"
          value={`${weather.main.temp}°C`}
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-myGray-800 rounded-xl gap-2 w-[359px] mt-2">
        <CardFooter weather={fiveDayWeather} fiveDayWeather={fiveDayWeather} />
      </div>
    </div>
  );
}

export default WeatherCard;
