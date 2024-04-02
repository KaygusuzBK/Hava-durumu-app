import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div id="main-layout">
      <Header />
      <Outlet />
    </div>
  );
}
