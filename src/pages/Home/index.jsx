import React from "react";
import { getCurrentWeather, getWeatherByCity } from "~/services";

function Home() {
  React.useEffect(() => {
    getCurrentWeather().then((data) => {
      console.log(data);
    });
  }, []);

  React.useEffect(() => {
    getWeatherByCity("ankara").then((data) => {
      console.log(data);
    });
  }, []);
  return <h1>Home</h1>;
}

export default Home;
