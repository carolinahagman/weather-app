import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="flex flex-col  items-center text-white m-14 border-white border rounded-3xl shadow-inner w-64 h-96 p-3">
      <h2 className="text-3xl">{props.city}</h2>
      <div className="weather-icon">
        <img style={{ width: "100px" }} src={props.icon} />
      </div>
      <h3 className="text-5xl">{props.celsiusDeg}&deg;</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default WeatherCard;
