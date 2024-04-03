import React from "react";
import { weatherConfig } from "~/weatherConfig.js";
import {
  kelvinToCelsius,
  mpsToKph,
  dayOrNight,
  dtToDay,
} from "~/utils/utils.js";

export default function CardFooter({ weather = {}, fiveDayWeather = [] }) {
  if (!weather) {
    return (
      <div className="text-white text-3xl justify-center items-center">
        Loading...
      </div>
    );
  }

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
              {dtToDay(weather.dt).slice(0, 3)}
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
