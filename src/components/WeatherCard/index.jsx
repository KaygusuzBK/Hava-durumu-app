import React from "react";
import { useEffect, useState } from "react";
import CardHeader from "~/components/WeatherCard/CardHeader/index";
import CardFooter from "~/components/WeatherCard/CardFooter/index";
import CardContent from "~/components/WeatherCard/CardContent/index";
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
    <div className="flex flex-col justify-start items-center rounded-xl w-[375px] h-[840px] bg-myGray-white gap-1">
      <CardHeader weather={weather} />
      <div className="flex flex-col items-center justify-center bg-myGray-800 rounded-xl gap-2 w-[359px] ">
        <CardContent
          icon={<ThermometerSimple />}
          label="Thermal sensation"
          value={`${kelvinToCelsius(weather.main.temp)}°C`}
        />
        <hr className="w-[327px] border -m-2 border-gray-900" />
        <CardContent
          icon={<CloudRain />}
          label="Probality of rain"
          value={`${weather.main.temp}°C`}
        />
        <hr className="w-[327px]  -m-2 border-gray-900" />
        <CardContent
          icon={<Wind />}
          label="Wind speed"
          value={`${mpsToKph(weather.wind.speed)} km/h`}
        />
        <hr className="w-[327px] border -m-2 border-gray-900" />
        <CardContent
          icon={<Drop />}
          label="Air humidity"
          value={`${weather.main.humidity}%`}
        />
        <hr className="w-[327px] border -m-2 border-gray-900" />
        <CardContent
          icon={<Sun />}
          label="UV index"
          value={`${weather.main.temp}°C`}
        />
      </div>
      {isMobile ? (
        <div className="flex items-center justify-center bg-myGray-800 rounded-xl gap-2 w-[359px]  py-4">
          <CardFooter
            weather={fiveDayWeather}
            fiveDayWeather={fiveDayWeather}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WeatherCard;
