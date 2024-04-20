import React, { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import SkeletonCard from "~/components/SkeletonCard";
import { getCurrentWeather } from "~/services";
import { useParams } from "react-router-dom";
import AllWeather from "~/components/AllWeather";

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { city: currentCity } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await getCurrentWeather(currentCity);
        setCurrentWeather(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentCity]);

  // Ekran boyutunu kontrol etmek için useEffect
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
          {/* Mobil görünümde yalnızca bir WeatherCard göster */}
          {isMobile ? (
            currentWeather &&
            currentWeather.list
              .filter((item, index) => index % 8 === 0 && index < 8)
              .map((item, index) => (
                <div className="mt-6" key={index}>
                  <WeatherCard
                    key={index}
                    weather={currentWeather.list[0]}
                    city={currentCity}
                    AllWeather={currentWeather.list}
                  />
                </div>
              ))
          ) : (
            <>
              {currentWeather &&
                currentWeather.list
                  .filter((item, index) => index % 8 === 0)
                  .map((item, index) =>
                    index === 0 ? (
                      <WeatherCard
                        key={index}
                        weather={item}
                        city={currentCity}
                        AllWeather={currentWeather.list}
                      />
                    ) : null
                  )}

              {currentWeather &&
                currentWeather.list
                  .filter((item, index) => index % 8 === 4)
                  .slice(0, 4)
                  .map((item, index) => (
                    <WeatherCard
                      key={index}
                      weather={item}
                      AllWeather={currentWeather.list}
                    />
                  ))}
            </>
          )}
        </div>
      )}
      <AllWeather />
    </div>
  );
}

export default Home;
