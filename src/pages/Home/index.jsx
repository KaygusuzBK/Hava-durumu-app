import React, { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import SkeletonCard from "~/components/SkeletonCard";
import { getCurrentWeather } from "~/services";
import { useParams } from "react-router-dom";

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
        setCurrentWeather(null);
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
          {[...Array(5)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap">
          {/* İlk WeatherCard */}
          {currentWeather &&
            currentWeather.list
              .filter((item, index) => index % 8 === 0)
              .map((item, index) => {
                const AllWeather = currentWeather.list;
                return (
                  index === 0 && (
                    <WeatherCard
                      key={index}
                      weather={item}
                      city={currentCity}
                      AllWeather={AllWeather}
                    />
                  )
                );
              })}
          {/* İkinci WeatherCard */}
          {currentWeather &&
            currentWeather.list
              .filter((item, index) => index % 8 !== 0 && index % 8 === 4)
              .slice(0, 4)
              .map((item, index) => {
                const AllWeather = currentWeather.list;
                return (
                  <WeatherCard
                    key={index}
                    weather={item}
                    AllWeather={AllWeather}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
}

export default Home;
