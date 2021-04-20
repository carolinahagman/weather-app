import React from "react";

const TodaysDate = () => (
  <h1 className=" pb-8 text-3xl text-white font-thin">
    {buildDate(new Date())}
  </h1>
);

//get the date how I want it
const buildDate = (e) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[e.getDay()];
  let date = e.getDate();
  let month = months[e.getMonth()];
  let year = e.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export default TodaysDate;
