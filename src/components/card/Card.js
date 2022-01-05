import React from "react";

export default function Card({max, min, name, img, onClose}) {
    return (
        <div>
            <button onClick={onClose}>X</button>
            <h2>{name}</h2>
            <p>Temperatura minima</p>
            <p>{min}</p>
            <p>Temperatura maxima</p>
            <p>{max}</p>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Img not found' />
        </div>
    )
}
