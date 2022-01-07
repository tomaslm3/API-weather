import React from "react";
import './Card.css'

export default function Card({max, min, name, img, onClose, temp, wind, clouds, pressure, humidity, description}) {
    return (
        <div className='main'>
            <button className='btn' onClick={onClose}>X</button>
            <h2 className="title">{name}</h2>
            <div className="body">
                <div className="temp">
                    <p>{temp}º</p>
                </div>
                <div className="stats">
                    <div className="min">
                        <p>Min</p>
                        <p>{min}º</p>
                    </div>
                    <div className="max">
                        <p>Max</p>
                        <p>{max}º</p>
                    </div>
                </div>
                <div className="info">
                    <img className="city-icon" src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='Img not found' />
                    <p>{description}</p>
                </div>
                <div className="hidden">
                    <div className="wind">
                        <p>Viento</p>
                        <p>{wind} km/h</p>
                    </div>
                    <div className="clouds">
                        <p>Nubosidad</p>
                        <p>{clouds}%</p>
                    </div>
                    <div className="pressure">
                        <p>Presión</p>
                        <p>{pressure} mb</p>
                    </div>
                    <div className="humidity">
                        <p>Humedad</p>
                        <p>{humidity}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
