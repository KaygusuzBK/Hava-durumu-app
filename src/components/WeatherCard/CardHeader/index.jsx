import {
  kelvinToCelsius,
  dayOrNight,
  dtToDay,
  getShortMonthName,
} from "~/utils/utils.js";

function CardHeader({ weather, city }) {
  console.log(weather.weather[0].main);
  return (
    <div className="flex justify-center items-center  rounded-xl w-[359px] h-[328px] bg-myGray-800 ">
      <div
        className="flex flex-col justify-between items-start rounded-lg w-[335px] h-[304px] text-white"
        style={{
          backgroundImage: `url("src/assets/img/Weather/Weather=${
            weather.weather[0].main
          }, Moment=${dayOrNight()}.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-start justify-center px-4 py-3">
          <div className="text-heading-sm font-heading-sm ">{city}</div>
          <div className=" text-text-xs font-text-xs ">
            {dtToDay(weather.dt)}
            {", "}
            {getShortMonthName(weather.dt_txt)} {weather.dt_txt.slice(8, 10)}
            {", "}
            {weather.dt_txt.slice(0, 4)}
          </div>
        </div>
        <div className="flex justify-between items-end w-full h-full gap-4 px-4 py-3">
          <div className="flex flex-col items-start justify-center ">
            <div className="pl-0.5 text-heading-xl font-heading-xl pb-2">
              {kelvinToCelsius(weather.main.temp).slice(0, 2)}°C
            </div>
            <div className="flex text-heading-xs font-heading-xs ">
              {kelvinToCelsius(weather.main.temp_max).slice(0, 2)}°C /
              {kelvinToCelsius(weather.main.temp_min).slice(0, 2)}°C
            </div>
            <div className="text-text-sm font-text-sm">
              {weather.weather[0].description}
            </div>
          </div>
          <div className="flex items-center justify-center max-w-[160px] ">
            <img
              src={
                "./src/assets/img/Weather-icons/" +
                weather.weather[0].description +
                "-" +
                dayOrNight() +
                ".svg"
              }
              alt="weather"
              className="h-[160px] w-[160px] max-w-[160px] max-h-[160px] mr-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
