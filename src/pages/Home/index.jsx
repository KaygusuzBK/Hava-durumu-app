import React from "react";
import { useEffect, useState } from "react";
import { getCurrentWeather, getWeatherByCity } from "~/services";

function Home() {
  const [currentLocation, setCurrentLocation] = useState("");

  React.useEffect(() => {
    getCurrentWeather().then((data) => {
      console.log(data);
      setCurrentLocation(data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-white">Bulunduğunuz Konum: {currentLocation.name}</h1>
    </div>
  );
}

export default Home;
