import React, { useState, useEffect, useRef } from "react";
import { SpinnerGap } from "@phosphor-icons/react";

export default function SearchBar({ onCitySelect }) {
  const allCities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
    "New York",
    "Los Angeles",
    "Paris",
    "Londra",
    "Tokyo",
    "Pekin",
    "Dubai",
    "Roma",
    "Barselona",
    "Berlin",
    "Amsterdam",
    "Moskova",
    "Rio de Janeiro",
    "Sydney",
    "Seul",
    "Singapur",
    "Hong Kong",
    "Şangay",
    "Mumbai",
    "Kairo",
    "Bangkok",
    "Mexico City",
    "Toronto",
    "Kapstadt",
    "Buenos Aires",
    "Lima",
    "Mekke",
    "Cenevre",
    "Zürih",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [matchedCities, setMatchedCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const inputRef = useRef(null);

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
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMatchedCities(matches.slice(0, 3));
    setPopoverVisible(!!searchTerm && matches.length > 0);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city);
    setPopoverVisible(false);
    onCitySelect(city);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setShowSpinner(true);
      setTimeout(() => {
        setShowSpinner(false);
      }, 1500);
    }
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
        onKeyDown={handleKeyPress}
      />
      {popoverVisible && (
        <div className="popover absolute bg-myGray-500 border-gray-300 rounded mt-1 w-[330px]">
          {matchedCities.map((city, index) => (
            <React.Fragment key={index}>
              <div
                className="popover-item p-2 ml-2 m-1 text-myGray-white cursor-pointer hover:bg-myGray-600 hover:text-white"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </div>
              {index !== matchedCities.length - 1 && (
                <hr className="border-gray-400" />
              )}
            </React.Fragment>
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
