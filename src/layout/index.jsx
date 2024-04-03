import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

export default function MainLayout() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div id="main-layout">
      <Header handleCitySelect={setSelectedCity} />
      <Outlet />
    </div>
  );
}
