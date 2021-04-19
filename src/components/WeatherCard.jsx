import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="flex flex-col font-thin items-center justify-evenly text-white m-14 border-white border rounded-3xl shadow-inner w-64 h-96 p-3">
      <h2 className="text-3xl">
        {props.city}, {props.country}
      </h2>
      <div className="weather-icon">
        <img className="w-12" src={props.icon} alt={props.alt} />
      </div>
      {props.temp ? <h3 className="text-5xl">{props.temp}&deg;c</h3> : null}
      <p>{props.description}</p>
    </div>
  );
};

export default WeatherCard;
