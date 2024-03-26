function WeatherItem({ label, value, icon }) {
  return (
    <div className="flex justify-between items-center text-white text-opacity-50 w-[327px] bg-myGray-800 ">
      <div className="flex items-center ">
        <div className="mr-2">{icon}</div>
        <p>{label}</p>
      </div>
      <div>{value}</div>
    </div>
  );
}

export default WeatherItem;
