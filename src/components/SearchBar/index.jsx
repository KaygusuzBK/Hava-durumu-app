import React, { useState, useEffect } from "react";

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
  const [popoverVisible, setPopoverVisible] = useState(false);

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
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCitySelect = (city) => {
    setSearchTerm(city);
    setPopoverVisible(false);
  };

  return (
    <div className="search-bar">
      <input
        className="bg-searchBar-bg p-2 rounded-lg text-white"
        type="text"
        placeholder="Search location"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {popoverVisible && (
        <div className="popover">
          {matchedCities.map((city, index) => (
            <React.Fragment key={index}>
              <div
                className="popover-item bg-gray-500 p-2 text-white"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </div>
              {index !== matchedCities.length - 1 && (
                <hr className="popover-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
