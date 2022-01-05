import React from "react";
import Card from "../card/Card";

export default function Cards({cities}) {
    return(
        <div>
            {
                cities && cities.map(city =>
                    <Card 
                        max={city.main.temp_max}
                        min={city.main.temp_min}
                        name={city.name}
                        img={city.weather[0].icon}
                        onClose={() => alert(city.name)}
                        key={city.id}
                    />
                )
            }
        </div>
    )
}
