import { weatherConfig } from "~/weatherConfig.js";

function CardHeader({ weather }) {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  const mpsToKph = (mps) => {
    return (mps * 3.6).toFixed(2); // 1 m/s = 3.6 km/h
  };

  const dayOrNight = () => {
    const date = new Date();
    const hours = date.getHours();
    return hours >= 6 && hours < 18 ? "Day" : "Night";
  };

  const dtToDay = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="flex justify-center items-center  rounded-xl w-[335px] h-[304px] p-3">
      <div
        // TODO Bg image path
        className="flex flex-col justify-between items-start rounded-xl w-[335px] h-[304px] text-white"
        style={{
          backgroundImage: `url(${weatherConfig.getImagePath(
            weather.weather[0].description,
            dayOrNight()
          )})`,
        }}
      >
        <div className="flex flex-col items-start justify-center px-4 py-3">
          <div className="text-heading-sm">
            {weather.name} {weather.sys.country}
          </div>
          <div className=" text-text-xs ">
            {dtToDay(weather.dt)}{" "}
            {new Date(weather.dt * 1000).toLocaleTimeString().slice(0, 5)}
          </div>
        </div>
        <div className="flex justify-between items-end w-full h-full gap-4 px-4 py-3">
          <div className="flex flex-col items-start justify-center ">
            <div className="pl-0.5 text-heading-xl font-heading-xl pb-4">
              {kelvinToCelsius(weather.main.temp).slice(0, 2)}°C
            </div>
            <div className="flex text-heading-sm font-heading-sm ">
              {kelvinToCelsius(weather.main.temp_max).slice(0, 2)}°C /
              {kelvinToCelsius(weather.main.temp_min).slice(0, 2)}°C
            </div>
            <div className="text-sm">{weather.weather[0].description}</div>
          </div>
          <div className="flex items-center justify-center max-w-[160px] ">
            <img
              src={weatherConfig.getIconPath(
                weather.weather[0].description,
                dayOrNight()
              )}
              alt="weather"
              className="w-[160px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
