import React, { useState, useEffect, useRef } from "react";
import { allCities } from "~/utils/cities.js";
import { NavLink } from "react-router-dom";
import { useDebounce } from "~/hooks/useDebounce.jsx";
import { SpinnerGap } from "@phosphor-icons/react";

export default function SearchBar({ onCitySelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedCities, setMatchedCities] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const inputRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

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
    setShowSpinner(true);
    const matches = allCities.filter((city) =>
      city.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setMatchedCities(matches.slice(0, 3));
    setPopoverVisible(!!debouncedSearchTerm && matches.length > 0);
    setShowSpinner(false);
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCitySelect = (city) => {
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

      {/* SpinnerGap gösterimi */}
      {showSpinner && (
        <SpinnerGap
          size={24}
          weight="bold"
          color="#FFFFFF"
          style={{ position: "absolute", top: "15px", right: "10px" }}
        />
      )}

      {/* Popover şehir eşleştirme listesi */}
      {popoverVisible && (
        <div className="popover absolute bg-myGray-500 border-gray-300 rounded w-[330px]">
          {matchedCities.map((city, index) => (
            <NavLink to={`/city/${city}`} key={index}>
              <div
                className="popover-item px-5 py-3 text-myGray-white cursor-pointer hover:bg-myGray-600 hover:text-white hover:font-bold"
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
    </div>
  );
}
