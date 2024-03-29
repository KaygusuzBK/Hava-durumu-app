import React from "react";
import { weatherConfig } from "~/enums";
import Logo from "~/assets/img/Weather-icons/rain.svg";

export default function CardFooter({ weather, fiveDayWeather }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const mpsToKph = (mps) => {
    return (mps * 3.6).toFixed(2); // 1 m/s = 3.6 km/h
  };

  return (
    <>
      {fiveDayWeather.map((weather, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center  rounded-xl gap-1 text-white"
        >
          <div>{weather.dt_txt.slice(5, 10)}</div>
          <img src={Logo} alt="weather" className="w-[56px] h-[56px]" />
          <div>{kelvinToCelsius(weather.main.temp_max)}°C</div>
          <div>{kelvinToCelsius(weather.main.temp_min)}°C</div>
        </div>
      ))}
    </>
  );
}
