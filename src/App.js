import "./App.css";

import TodaysDate from "./components/TodaysDate";
import SearchField from "./components/SearchField";
import WeatherCard from "./components/WeatherCard";
import ToggleButton from "./components/ToggleButton";
import React, { useState } from "react";

const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const giphyKey = process.env.REACT_APP_WEATHER_API_KEY;

//

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${weatherKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");

          const iconName = result.weather[0].description;
          fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=5668eca30a5d4bc767a142ccd8e55f40&q=${iconName}&limit=1`
          );
        });
    }
  };
  return (
    <div className="w-screen h-screen bg-peach">
      <div className="w-full h-full flex flex-col py-8 items-center">
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
            description={weather.weather[0].description}
            temp={Math.round(weather.main.temp)}
          />
        ) : null}
      </div>
    </div>
  );
}
export default App;
