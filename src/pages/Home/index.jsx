import React, { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import SkeletonCard from "~/components/SkeletonCard";
import { getCurrentWeather, getFiveDayWeatherForecast } from "~/services";
import { useParams } from "react-router-dom";
import Card from "~/components/card";

function Home() {
  const [WeatherBycurrentLocation, WeatherBysetCurrentLocation] = useState("");
  const [WeatherByFiveDayForecast, SetWeatherByFiveDayForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const NowCity = useParams().city;

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
    handleResize(); // burda da fonksiyonu çağırıyoruz ki sayfa yenilendiğinde değişiklikleri görebilelim
    return () => window.removeEventListener("resize", handleResize); // Event listener'ı kaldır
  }, [WeatherBycurrentLocation]);

  return (
    <div className="grid grid-cols-1">
      {loading ? (
        <div className="flex justify-center items-center flex-wrap gap-6 mt-20">
          {[...Array(5)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <WeatherCard
              key={0}
              weather={WeatherBycurrentLocation}
              fiveDayWeather={WeatherByFiveDayForecast}
            />
          </div>
          {/* 5 günlük hava durumu kartları olacak */}
          {!isMobileView &&
            WeatherByFiveDayForecast.filter(
              (weather, index) => (index + 1) % 8 === 0 // 8 saatte bir veri geldiği için 8'e bölümünden kalanı 0 olanları alıyoruz
            ).map((weather, index) => (
              <WeatherCard key={index + 1} weather={weather} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
