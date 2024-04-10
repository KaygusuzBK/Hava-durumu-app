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

const whatTimeIsIt = () => {
  const date = new Date();
  const hours = date.getHours();

  return hours;
};

export { kelvinToCelsius, mpsToKph, dayOrNight, dtToDay, whatTimeIsIt };
