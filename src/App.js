import "./App.css";

import TodaysDate from "./components/TodaysDate";
import SearchField from "./components/SearchField";
import WeatherCard from "./components/WeatherCard";
import React, { useState } from "react";

const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const giphyKey = process.env.REACT_APP_GIPHY_API_KEY;

//

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${weatherKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");

          const getGif = result.weather[0].main;
          const request = fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${getGif}&limit=1`
          );
          console.log(request);
        });
    }
  };
  return (
    <div className="w-screen h-screen bg-pink">
      <div className="w-full  flex flex-col py-8 items-center">
        <TodaysDate />
        <SearchField
          handleChange={(e) => setQuery(e.target.value)}
          value={query}
          handleKeyPress={search}
        />
        {typeof weather.main != "undefined" ? (
          <WeatherCard
            city={weather.name}
            country={weather.sys.country}
            icon="2"
            alt={weather.weather[0].main}
            description={weather.weather[0].description}
            temp={Math.round(weather.main.temp)}
          />
        ) : null}
      </div>
    </div>
  );
}
export default App;
