import "./App.css";

import Title from "./components/Title";
import InputForm from "./components/InputForm";
import WeatherCard from "./components/WeatherCard";
import React from "react";

const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const giphyKey = process.env.REACT_APP_WEATHER_API_KEY;
let cityInput = "Göteborg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: cityInput,
      celsiusDeg: undefined,
      icon: undefined,
      description: "",
      error: false,
    };
    this.getWeather();
  }

  calcCelsius(degKelvin) {
    let celsius = Math.floor((degKelvin - 273.15) * 1);
    return celsius;
  }

  getWeather = async () => {
    const apiRequest = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${weatherKey}`
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
    });
  };

  render() {
    return (
      <div className="w-screen h-screen bg-peach flex flex-col items-center justify-center">
        <InputForm />
        <WeatherCard
          city={this.state.city}
          celsiusDeg={this.state.celsiusDeg}
          //change to giphy sticker
          icon={this.state.icon}
          description={this.state.description}
        />
        <Title>check the weather</Title>
      </div>
    );
  }
}

export default App;
