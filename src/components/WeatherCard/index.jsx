import React, { useEffect, useState } from "react";
import { kelvinToCelsius, mpsToKph } from "~/utils/utils.js";
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
import Card from "../card";

function WeatherCard({ weather }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Şehir değiştiğinde yeniden boyutlandırma yapılması gerekebilir
    setIsMobile(window.innerWidth < 768);
  }, [weather]);

  if (!weather) {
    return (
      <div className="text-white text-3xl justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-start items-center rounded-xl w-[375px] h-[840px] gap-1">
      <CardHeader weather={weather} />
      <div className="flex flex-col items-center justify-center bg-myGray-800 rounded-xl gap-2 w-[359px] ">
        <CardContent
          icon={<ThermometerSimple className="h-[24px] w-[24px]" />}
          label="Thermal sensation"
          value={`${kelvinToCelsius(weather.main.temp).slice(0, 2)}°C`}
        />
        <div className="w-[327px] border border-solid -m-2 border-myGray-500" />
        <CardContent
          icon={<CloudRain className="h-[24px] w-[24px]" />}
          label="Probality of rain"
          value={`${weather.clouds.all}%`}
        />
        <div className="w-[327px] border border-solid border-myGray-500 " />
        <CardContent
          icon={<Wind className="h-[24px] w-[24px]" />}
          label="Wind speed"
          value={`${mpsToKph(weather.wind.speed).slice(0, 2)} km/h`}
        />
        <div className="w-[327px] border border-solid border-myGray-500 " />
        <CardContent
          icon={<Drop className="h-[24px] w-[24px]" />}
          label="Air humidity"
          value={`${weather.main.humidity}%`}
        />
        <div className="w-[327px] border border-solid border-myGray-500 " />
        <CardContent
          icon={<Sun className="h-[24px] w-[24px]" />}
          label="UV index"
          value={`${weather.main.humidity}`}
        />
      </div>
      {isMobile ? (
        <div className="flex items-center justify-center bg-myGray-800 rounded-xl gap-2 w-[359px]  py-4">
          {/* <CardFooter
            weather={fiveDayWeather}
            fiveDayWeather={fiveDayWeather}
          /> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WeatherCard;
