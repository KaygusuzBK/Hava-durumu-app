import SearchBar from "~/components/SearchBar";
import Logo from "~/assets/img/Logo.svg";
import { NavLink } from "react-router-dom";
import MobileComponent from "~/components/MobileComponent";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between bg-header-bg p-4 md:flex-row md:justify-between md:p-6">
      <div className="flex justify-center items-center mb-4 md:mb-0">
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <NavLink to="/" className="text-white font-bold text-xl ml-2 md:ml-4">
          iWeather
        </NavLink>
      </div>
      <MobileComponent mobileBreakpoint={768}>
        <div className="text-white text-center">
          <div className="text-Product-blueLight">Welcome to TypeWeather</div>
          <div>Choose a location to see the weather forecast</div>
        </div>
      </MobileComponent>
      {/* <SearchBar className="mt-4 md:mt-0" /> */}
    </header>
  );
}
