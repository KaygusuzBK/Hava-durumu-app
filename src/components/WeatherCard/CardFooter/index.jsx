import React from "react";
import { weatherConfig } from "~/weatherConfig.js";

export default function CardFooter({ weather = {}, fiveDayWeather = [] }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const mpsToKph = (mps) => {
    return (mps * 3.6).toFixed(2); // 1 m/s <T= 3.6 km/h
  };

  const dayOrNight = () => {
    const date = new Date();
    const hours = date.getHours();
    return hours >= 6 && hours < 18 ? "Day" : "Night";
  };

  const dtToDay = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };
  console.log(weather);

  return (
    <>
      {fiveDayWeather
        .filter((weather, index) => (index + 1) % 8 === 0 || index === 0)
        .map((weather, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-xl gap-1 text-myGray-white text-heading-xs"
          >
            <div className="text-heading-xs font-heading-xs">
              {dtToDay(weather.dt)}
            </div>
            <img
              src={weatherConfig.getIconPath(
                weather.weather[0].description,
                dayOrNight()
              )}
              alt="weather"
              className="h-[56px] w-[56px]"
            />
            <div className="text-myGray-white text-heading-xs">
              {kelvinToCelsius(weather.main.temp_max).slice(0, 2)}°C
            </div>
            <div className="text-myGray-400 text-heading-xs">
              {kelvinToCelsius(weather.main.temp_min).slice(0, 2)}°C
            </div>
          </div>
        ))}
    </>
  );
}
