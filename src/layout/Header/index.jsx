import SearchBar from "~/components/SearchBar";
import Logo from "~/assets//img/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-2 bg-header-bg p-4 ">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <NavLink to="/" className="text-white  font-bold">
          iWeather
        </NavLink>
      </div>
      <SearchBar />
    </header>
  );
}
