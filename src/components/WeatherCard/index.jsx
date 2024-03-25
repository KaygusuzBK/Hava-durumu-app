import React from "react";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import WeatherBg from "~/assets/img/Weather/Weather=Clear, Moment=Day.svg";

function WeatherCard({ weather }) {
  let time = new Date();
  if (!weather) {
    return (
      <div className="text-white text-3xl justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${WeatherBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white text-xl flex items-center">
          {weather.name} {weather.sys.country}
        </div>
        <div className="text-white ">
          {
            time.toDateString().slice(0, 3) + // Günün adı
              ", " +
              time.toDateString().slice(4, 7) + // ayın adı
              ", " +
              time.toDateString().slice(8, 10) + // günün tarihi
              ", " +
              time.toDateString().slice(11, 15) // yıl
          }
        </div>
      </div>
      <br />
      {/* 2. Kısım */}
      <div className="flex flex-col items-center justify-center  bg-gray-950 p-4 rounded-lg">
        <div className="text-white text-3xl">{weather.main.temp}°C</div>
        <hr className="w-full border-1 border-white" />
        <div className="text-white text-3xl">
          {weather.weather[0].description}
        </div>
      </div>
      {/* 3. KISIM */}
      <div></div>
    </div>
  );
}

export default WeatherCard;
