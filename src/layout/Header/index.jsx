import SearchBar from "~/components/SearchBar";
import logo from "~/assets//img/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-2 bg-header-bg p-4 ">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="text-white">iWeather</p>
      </div>
      <SearchBar />
    </header>
  );
}
