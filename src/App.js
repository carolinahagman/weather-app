import "./App.css";

import TodaysDate from "./components/TodaysDate";
import InputForm from "./components/InputForm";
import WeatherCard from "./components/WeatherCard";
import ToggleButton from "./components/ToggleButton";
import React from "react";

const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const giphyKey = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      celsiusDeg: undefined,
      icon: undefined,
      description: "",
      error: false,
    };
  }

  calcCelsius(degKelvin) {
    let celsius = Math.floor((degKelvin - 273.15) * 1);
    return celsius;
  }

  getWeather = async (event) => {
    event.preventDefault();

    const locationInput = event.target.elements.location.value;

    if (locationInput) {
      const apiRequest = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${weatherKey}`
      );

      const apiResponse = await apiRequest.json();
      const iconName = apiResponse.weather[0].icon;
      const iconApi = await fetch(
        "http://openweathermap.org/img/w/" + iconName + ".png"
      );

      this.setState({
        city: apiResponse.name,
        celsiusDeg: this.calcCelsius(apiResponse.main.temp),
        icon: iconApi.url,
        description: apiResponse.weather[0].description,
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <div className="w-screen h-screen bg-peach">
        <div className="flex flex-col items-center pt-6">
          <TodaysDate />
          <InputForm loadWeather={this.getWeather} error={this.state.error} />
          <WeatherCard
            city={this.state.city}
            celsiusDeg={this.state.celsiusDeg}
            //change to giphy sticker
            icon={this.state.icon}
            description={this.state.description}
          />
        </div>
        <ToggleButton />
      </div>
    );
  }
}

export default App;
