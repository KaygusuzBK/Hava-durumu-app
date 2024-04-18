import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

export default function MainLayout({ onCitySelect }) {


  return (
    <div id="main-layout">
      <Header  />
      <Outlet />
    </div>
  );
}
