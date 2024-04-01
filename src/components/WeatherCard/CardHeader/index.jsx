import { weatherConfig } from "~/enums";

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

  return (
    <div className="flex justify-center items-center bg-myGray-800 rounded-xl w-[335px] h-[304px] p-3">
      <div
        className="flex flex-col justify-between items-start rounded-xl w-[335px] h-[304px] text-white "
        // style={{ // TODO Bg image path
        //   backgroundImage: `url(${weatherConfig.getImagePath(
        //     weather.weather[0]?.main, // weather.weather[0].main olmalı
        //     dayOrNight()
        //   )})`,
        // }}
      >
        <div className="flex flex-col items-start justify-center px-4 py-3">
          <div className="text-xl">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="font-thin text-sm ">27.03.2024</div>
        </div>
        <div className="flex justify-between items-end w-full h-full gap-4 px-4 py-3">
          <div className="flex flex-col items-start justify-center ">
            <div className="text-4xl pl-0.5 font-extrabold pb-4">
              {kelvinToCelsius(weather.main.temp)}°C
            </div>
            <div className="flex text-sm font-">
              {kelvinToCelsius(weather.main.temp_max)}°C /
              {kelvinToCelsius(weather.main.temp_min)}°C
            </div>
            <div className="text-sm">{weather.weather[0].description}</div>
          </div>
          <div className="flex items-center justify-center max-w-[100px] max-h-[100px] pr-6">
            <img
              src={weatherConfig.getIconPath("sun rain")}
              alt="weather"
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
