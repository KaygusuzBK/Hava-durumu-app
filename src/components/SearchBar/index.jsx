import React, { useState, useEffect, useRef } from "react";
import { allCities } from "~/utils/cities.js";
import { NavLink } from "react-router-dom";
import { SpinnerGap } from "@phosphor-icons/react";
import { useDebounce } from "~/hooks/useDebounce.jsx";

export default function SearchBar({ onCitySelect }) {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedCities, setMatchedCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const inputRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setPopoverVisible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const matches = allCities.filter((city) =>
      city.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setMatchedCities(matches.slice(0, 3));
    setPopoverVisible(!!debouncedSearchTerm && matches.length > 0);
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city);
    setPopoverVisible(false);
  };

  return (
    <div className="search-bar relative">
      <input
        ref={inputRef}
        className="bg-searchBar-bg rounded-lg text-white text-lg w-[311px] h-[56px] border-none focus:outline-none pl-5"
        type="text"
        placeholder="Search location"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {popoverVisible && (
        <div className="popover absolute bg-myGray-500 border-gray-300 rounded mt-1 w-[330px]">
          {matchedCities.map((city, index) => (
            <NavLink to={`/city/${city}`} key={index}>
              <div
                className="popover-item p-2 ml-2 m-1 text-myGray-white cursor-pointer hover:bg-myGray-600 hover:text-white"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </div>
              {index !== matchedCities.length - 1 && (
                <hr className="border-gray-400" />
              )}
            </NavLink>
          ))}
        </div>
      )}
      {showSpinner && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <SpinnerGap size={32} className="text-white spinner animate-spin" />
        </div>
      )}
    </div>
  );
}
