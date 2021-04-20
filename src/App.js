import "./App.css";

import TodaysDate from "./components/TodaysDate";
import SearchField from "./components/SearchField";
import WeatherCard from "./components/WeatherCard";
import Error from "./components/Error";
import React, { useState } from "react";

const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const giphyKey = process.env.REACT_APP_GIPHY_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(false);

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${weatherKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.message === "city not found") {
            setError(true);
            return;
          }
          setWeather(result);
          setQuery("");
          setError(false);
        });
    }
  };
  if (Object.keys(weather).length !== 0) {
    const getGif = weather.weather[0].description;
    fetch(
      `https://api.giphy.com/v1/stickers/search?api_key=${giphyKey}&q=${getGif}&limit=1`
    )
      .then((res) => res.json())
      .then((result) => {
        setIcon(result.data[0].images.downsized.url);
      });
  }

  return (
    <div className="w-screen h-screen bg-pink">
      <div className="w-full flex flex-col py-8 items-center">
        <TodaysDate />
        {error ? <Error /> : null}
        <SearchField
          handleChange={(e) => setQuery(e.target.value)}
          value={query}
          handleKeyPress={search}
        />
        {typeof weather.main !== "undefined" ? (
          <WeatherCard
            city={weather.name}
            country={weather.sys.country}
            icon={icon}
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
