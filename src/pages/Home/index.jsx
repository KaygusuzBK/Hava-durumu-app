import React from "react";
import { getWeather } from "~/services";

function Home() {
  React.useEffect(() => {
    getWeather("tekirdağ").then((data) => {
      console.log(data);
    });
  }, []);
  return <h1>Home</h1>;
}

export default Home;
