import React, { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import MobileComponent from "~/components/MobileComponent";
import SkeletonCard from "~/components/SkeletonCard";
import { getCurrentWeather, getFiveDayWeatherForecast } from "~/services";

function Home() {
  const [WeatherBycurrentLocation, WeatherBysetCurrentLocation] = useState("");
  const [WeatherByFiveDayForecast, SetWeatherByFiveDayForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    getCurrentWeather().then((data) => {
      WeatherBysetCurrentLocation(data);
    });
  }, [WeatherBysetCurrentLocation]);

  useEffect(() => {
    if (WeatherBycurrentLocation) {
      getFiveDayWeatherForecast(WeatherBycurrentLocation.name).then((data) => {
        SetWeatherByFiveDayForecast(data);
        setLoading(false); // Yükleme tamamlandığında yüklemeyi durdur
      });
    }

    function handleResize() {
      setIsMobileView(window.innerWidth <= 640);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => window.removeEventListener("resize", handleResize);
  }, [WeatherBycurrentLocation]);

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {loading ? (
        <SkeletonCard />
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <WeatherCard
              key={0}
              weather={WeatherBycurrentLocation}
              fiveDayWeather={WeatherByFiveDayForecast}
            />
          </div>
          {/* 5 günlük hava durumu kartları olacak */}
          {!isMobileView &&
            WeatherByFiveDayForecast.slice(1).map((weather, index) => (
              <WeatherCard key={index + 1} weather={weather} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
