import { Outlet } from "react-router-dom";
import Header from "./Header";
import Background from "~/assets/img/Background.svg";
import { weatherConfig } from "~/enums";

export default function MainLayout() {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      id="main-layout" // TODO -m-2
    >
      <Header />
      <Outlet />
    </div>
  );
}
