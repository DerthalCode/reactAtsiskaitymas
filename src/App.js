import Header from "./components/Header/Header";
import FrontPage from "./components/FrontPage/FrontPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Kaunas");

  const searchHandler = (city) => {
    setCity(city);
  }

  useEffect(() => {
    fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`).then(resp => resp.json())
    .then(data => setWeather(data));
  }, [city])


  return (
    <div className="App">
      <Header searchHandler={searchHandler} />
      {
        Object.keys(weather).length && <FrontPage weather={weather}/>
      }
    </div>
  );
}

export default App;
