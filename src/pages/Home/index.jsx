import React, { useEffect, useState } from "react";
import WeatherCard from "~/components/WeatherCard";
import SkeletonCard from "~/components/SkeletonCard";
import { getCurrentWeather } from "~/services";
import { useParams } from "react-router-dom";
import FlipCard from "~/components/card";

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
          {[...Array(5)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap">
          {currentWeather &&
            currentWeather.list
              .filter((item, index) => index % 8 === 0)
              .map((item, index) => {
                const frontIndex = index * 8;
                const backIndex = index * 8 + 4;
                const AllWeather = currentWeather.list;
                return (
                  // <FlipCard
                  //   key={index}
                  //   frontContent={
                  //     <WeatherCard
                  //       weather={currentWeather.list[frontIndex]}
                  //       city={currentCity}
                  //     />
                  //   }
                  //   backContent={
                  //     <WeatherCard
                  //       weather={currentWeather.list[backIndex]}
                  //       city={currentCity}
                  //     />
                  //   }
                  // />
                  <WeatherCard
                    key={index}
                    weather={item}
                    city={currentCity}
                    AllWeather={AllWeather}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
}
// <WeatherCard key={index} weather={item} city={currentCity} />

export default Home;
