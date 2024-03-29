import React, { useState, useEffect, useRef } from "react";
import { SpinnerGap } from "@phosphor-icons/react";

export default function SearchBar() {
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
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopoverVisible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setMatchedCities([]);
      setPopoverVisible(false);
      return;
    }

    const matches = allCities.filter((city) =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMatchedCities(matches.slice(0, 3)); // Max 3 eşleşme göster
    setPopoverVisible(true);
  }, [searchTerm, allCities]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city); // Seçilen şehri arama çubuğuna yaz
    setPopoverVisible(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setShowSpinner(true); // Spinner'ı göster

      // Spinner'ı 5 saniye sonra gizle
      setTimeout(() => {
        setShowSpinner(false);
      }, 5000);
    }
  };

  return (
    <div className="search-bar relative">
      <input
        className="bg-searchBar-bg rounded-lg text-white text-lg w-[311px] h-[56px] pl-4"
        type="text"
        placeholder="Search location"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Enter tuşuna basıldığında tetiklenecek
      />
      {popoverVisible && (
        <div
          ref={popoverRef}
          className="popover absolute bg-white border border-gray-300 shadow-md rounded mt-1 w-[315px]"
        >
          {matchedCities.map((city, index) => (
            <div
              key={index}
              className="popover-item p-2 text-gray-800 cursor-pointer hover:bg-gray-200"
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
      {showSpinner && <SpinnerGap size={32} />} {/* Spinner'ı göster */}
    </div>
  );
}
