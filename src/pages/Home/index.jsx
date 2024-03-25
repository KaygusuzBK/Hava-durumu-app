import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import { getCurrentWeather, getFiveDayWeatherForecast } from "~/services";
import { weatherConfig } from "~/enums";

function Home() {
  const [WeatherBycurrentLocation, WeatherBysetCurrentLocation] = useState("");

  useEffect(() => {
    getCurrentWeather().then((data) => {
      WeatherBysetCurrentLocation(data);
    });
  }, []);

  // 5 GÜNLÜK VERİ
  // useEffect(() => {
  //   if (currentLocation) {
  //     getFiveDayWeatherForecast(currentLocation.name).then((data) => {
  //       console.log(data);
  //     });
  //   }
  // }, [currentLocation]);

  return (
    <div>
      <WeatherCard weather={WeatherBycurrentLocation} />
    </div>
  );
}

export default Home;
