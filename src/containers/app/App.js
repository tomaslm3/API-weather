import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Cards from '../../components/cards/Cards'
import Api from "../../apicontain/Api";

function App() {
  const [cities, setCities] = useState([]);
  const [added, setAdded] = useState(false)

  function onSearch(city) {
    Api(city)
      .then((json) => {
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
              longitude: json.coord.lon
            };
            if(cities.find((e) => e.id === city.id)){
              alert(`Ciudad ${city.name} duplicada`)
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
    <div className="App">
      <Route path={'/'} render={() => <Nav onSearch={onSearch} success={success}/>} />
      <Route exact path={'/'} render={() => <Cards cities={cities} onClose={onClose}/>}/>
    </div>
  );
}

export default App;
