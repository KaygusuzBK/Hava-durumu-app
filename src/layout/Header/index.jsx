import React, { useState } from "react";
import SearchBar from "~/components/SearchBar";
import Logo from "~/assets/img/Logo.svg";
import { NavLink } from "react-router-dom";
import MobileComponent from "~/components/MobileComponent";

export default function Header({ onCitySelect }) {
  const [selectedCity, setSelectedCity] = useState(""); // Seçilen şehir bilgisini state olarak tut

  const handleCitySelect = (city) => {
    setSelectedCity(city); // Seçilen şehri state'e at
  };

  return (
    <header className="flex flex-col items-center justify-between bg-header-bg p-4 md:flex-row md:justify-between ">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <NavLink to="/" className="text-white text-heading-md no-underline">
          iWeather
        </NavLink>
      </div>
      <MobileComponent mobileBreakpoint={768}>
        <div className="text-white text-center mt-20 mb-5">
          <div className="text-myGray-white text-heading-md font-heading-md">
            Welcome to
            <span className="text-Product-blueLight">TypeWeather</span>
          </div>
          <div className="text-text-sm text-[#BFBFD4]">
            Choose a location to see the weather forecast
          </div>
        </div>
      </MobileComponent>
      <SearchBar onCitySelect={handleCitySelect} />
    </header>
  );
}
