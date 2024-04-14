import React, { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import SkeletonCard from "~/components/SkeletonCard";
import { getCurrentWeather } from "~/services";
import { useParams } from "react-router-dom";
import Card from "~/components/card";

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const { city: currentCity } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await getCurrentWeather(currentCity);
        setCurrentWeather(data);
      } catch (error) {
        console.error("Hava durumu verileri alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentCity]);

  return (
    <div className="grid grid-cols-1">
      {loading ? (
        <div className="flex justify-center items-center flex-wrap gap-6 mt-20">
          <p>Hava durumu bilgileri yükleniyor...</p>
          {[...Array(3)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap">
          <div className="flex flex-col items-center justify-center">
            {currentWeather && <WeatherCard key={0} weather={currentWeather} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
