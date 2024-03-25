import React from "react";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import WeatherBg from "~/assets/img/Weather/Weather=Clear, Moment=Day.svg";

function WeatherCard({ weather }) {
  console.log(weather);
  let time = new Date();
  if (!weather) {
    return (
      <div className="text-white text-3xl justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
{/*  */}
      <br />
      {/* 2. Kısım */}
      <div className="flex flex-col items-center justify-center  bg-gray-950 p-4 rounded-lg">
        <div className="text-white text-3xl">
          {weather.main.feels_like}°C Hissedilen
        </div>
        <hr className="w-full border-1 border-white" />
        <div className="text-white text-3xl">{weather.main.humidity} Nem</div>
        <hr className="w-full border-1 border-white" />
        <div className="text-white text-3xl">
          {weather.wind.speed} Rüzgar hızı
        </div>
        <hr className="w-full border-1 border-white" />
        <div className="text-white text-3xl"></div>
        <hr className="w-full border-1 border-white" />
      </div>
      {/* 3. KISIM */}
      <div>
        
      </div>
    </div>
  );
}

export default WeatherCard;
