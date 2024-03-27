import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div
      id="main-layout" // TODO -m-2
      className="-m-2"
    >
      <Header />
      <Outlet />
    </div>
  );
}
