import "./App.css";

import Title from "./components/Title";
import InputForm from "./components/Input-form";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="w-screen h-screen bg-peach flex flex-col items-center justify-center">
      <InputForm />
      <WeatherCard />
      <Title>check the weather</Title>
    </div>
  );
}

export default App;
