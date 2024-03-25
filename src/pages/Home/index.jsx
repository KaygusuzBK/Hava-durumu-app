import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import { getCurrentWeather, getFiveDayWeatherForecast } from "~/services";

function Home() {
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    getCurrentWeather().then((data) => {
      setCurrentLocation(data);
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
      <WeatherCard weather={currentLocation} />
    </div>
  );
}

export default Home;
