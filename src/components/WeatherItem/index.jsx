function WeatherItem({ label, value, icon }) {
  return (
    <div className="flex justify-between items-center text-white w-60">
      <div className="flex items-center">
        <div className="mr-2">{icon}</div>
        <p>{label}</p>
      </div>
      <div>{value}</div>
    </div>
  );
}

export default WeatherItem;
