import React from "react";
import { weatherConfig } from "~/enums";

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

  console.log(weather);

  return (
    <>
      {fiveDayWeather.map(
        (weather, index) => (
          console.log(weather.weather[0].description),
          (
            <div
              key={index}
              className="flex flex-col items-center justify-center  rounded-xl gap-1 text-myGray-white text-heading-xs"
            >
              <div>{weather.dt_txt.slice(5, 10)}</div>
              <img
                src={weatherConfig.getIconPath(
                  weather.weather[0].description,
                  dayOrNight()
                )}
                alt="weather"
                className="w-[56px] "
              />
              <div className="text-myGray-white text-heading-xs">
                {kelvinToCelsius(weather.main.temp_max).slice(0, 2)}°C
              </div>
              <div className="text-myGray-400 text-heading-xs">
                {kelvinToCelsius(weather.main.temp_min).slice(0, 2)}°C
              </div>
            </div>
          )
        )
      )}
    </>
  );
}
