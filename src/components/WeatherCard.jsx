import React from "react";
import icons from "weather-icons-react";

const WeatherCard = () => {
  return (
    <div className="flex flex-col  items-center text-white m-14 border-white border rounded-3xl shadow-inner w-64 h-96 p-3">
      <h2 className="text-3xl">Göteborg</h2>

      <h3 className="text-5xl">18&deg;</h3>
    </div>
  );
};

export default WeatherCard;
