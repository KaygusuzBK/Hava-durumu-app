import React from "react";
import "./styles.css"; // Tailwind CSS ve özel stilleri içeren CSS dosyasını içe aktarın

export default function AllWeather() {
  return (
    <div className="all-weather-container flex items-center justify-center w-full h-screen overflow-hidden">
      <div className="weather-carousel flex animate-scrollRight">
        {/* Hava durumu bilgilerini temsil eden içerik örnekleri */}
        {[...Array(12)].map((_, index) => (
          <div key={index} className="weather-item flex-shrink-0 mx-4">
            <p>
              <span className="text-2xl font-bold">Today</span>
              <span className="text-sm"> - 12:00</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
