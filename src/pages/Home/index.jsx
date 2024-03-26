import React, { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
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
  }, []);

  useEffect(() => {
    if (WeatherBycurrentLocation) {
      getFiveDayWeatherForecast(WeatherBycurrentLocation.name).then((data) => {
        console.log(data);
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-5 mt-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <WeatherCard
              key={0}
              weather={WeatherBycurrentLocation}
              fiveDayWeather={WeatherByFiveDayForecast}
            />
          </div>
           {/* 5 günlük hava durumu kartları olacak
          {!isMobileView &&
            WeatherByFiveDayForecast.slice(1).map((weather, index) => (
              <WeatherCard key={index + 1} weather={weather} />
            ))} */}
        </>
      )}
    </div>
  );
}

export default Home;
