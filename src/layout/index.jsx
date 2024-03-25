import { Outlet } from "react-router-dom";
import Header from "./Header";
import Background from "~/assets/img/Background.svg";

export default function MainLayout() {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      id="main-layout" // TODO -m-2
      className="-m-2"
    >
      <Header />
      <Outlet />
    </div>
  );
}
