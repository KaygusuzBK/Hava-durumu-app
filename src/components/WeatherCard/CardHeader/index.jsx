import background from "~/assets/img/Weather/Weather=Rain, Moment=Night.svg";
import Logo from "~/assets/img/Weather-icons/rain.svg";

function CardHeader({ weather }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  const mpsToKph = (mps) => {
    return (mps * 3.6).toFixed(2); // 1 m/s = 3.6 km/h
  }; 

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="flex flex-col justify-between items-start  h-[305px] w-[305px]  rounded-xl p-4 text-white"
    >
      <div className="flex flex-col items-start justify-center ">
        <div className="text-2xl">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="font-thin text-sm ">27.03.2024</div>
      </div>
      <div className="flex justify-between items-end w-full h-full gap-4">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="text-3xl pl-0.5">
            {kelvinToCelsius(weather.main.temp)}°C
          </div>
          <div className="flex gap-2 text-sm font-bold">
            {kelvinToCelsius(weather.main.temp_max)}°C /
            {kelvinToCelsius(weather.main.temp_min)}°C
          </div>
          <div className="text-sm">{weather.weather[0].description}</div>
        </div>
        <div>
          <img src={Logo} alt="weather" className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
