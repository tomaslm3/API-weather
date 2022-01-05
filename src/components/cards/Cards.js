import React from "react";
import Card from "../card/Card";

export default function Cards({cities, onClose}) {
    if(cities) {
        return(
            <div>
                {cities.map(city =>
                    <Card 
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
            <div>Sin ciudades</div>
        )
    }
}
