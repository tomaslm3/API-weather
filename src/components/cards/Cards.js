import React from "react";
import Card from "../card/Card";
import './Cards.css'

export default function Cards({cities, onClose}) {
    if(cities.length) {
        return(
            <div className="cities">
                {cities.map(city =>
                    <Card 
                        temp={city.temp}
                        max={city.max}
                        min={city.min}
                        name={city.name}
                        img={city.img}
                        onClose={() => onClose(city.id)}
                        id={city.id}
                        key={city.id}
                    /> )
                }
            </div>
        );
    } else {
        return (
            <div className="no-city">Sin ciudades</div>
        )
    }
}
