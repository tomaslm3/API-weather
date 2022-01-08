import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Cards from '../../components/cards/Cards'
import Api from "../../apicontain/Api";
import useLocalStorage from 'use-local-storage'
import './App.css';
import Footer from "../../components/footer/Footer";
import GifBG from "../../gifBG/GifBG";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [cities, setCities] = useState([]);
  const [added, setAdded] = useState(false)


  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  } 

  function onSearch(city) {
    Api(city)
      .then((json) => {
        console.log(json)
          if(json.main !== undefined) {
            const city = {
              min: Math.round(json.main.temp_min),
              max: Math.round(json.main.temp_max),
              img: json.weather[0].icon,
              id: json.id,
              wind: json.wind.speed,
              temp: json.main.temp,
              name: json.name,
              weather: json.weather[0].main,
              clouds: json.clouds.all,
              latitude: json.coord.lat,
              longitude: json.coord.lon,
              description: json.weather[0].description,
              pressure: json.main.pressure,
              humidity: json.main.humidity
            };
            if(cities.find((e) => e.id === city.id)){
              alert(`Ciudad ${city.name} duplicada`)
            } else if(cities.length === 0) {
              setCities((oldCities) => [...oldCities, city])
            } else {
              return !added ? null : setCities((oldCities) => [...oldCities, city]);
              
            }

          }else{
            alert('Ciudad no encontrada');
          }
      })
  }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function success() {
      setAdded(true)
    }
  return (
    <div className="App" data-theme={theme}>
      <div className="gif">
        {cities.length !== 0 ? <GifBG /> :null}
      </div>
      <Route path={'/'} render={() => <Nav onSearch={onSearch} success={success} switchTheme={switchTheme} theme={theme}/>} />
      <Route exact path={'/'} render={() => <Cards cities={cities} onClose={onClose}/>}/>
      <Route path={'/'} component={Footer} />
    </div>
  );
}

export default App;
