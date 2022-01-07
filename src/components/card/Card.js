import React from "react";
import './Card.css'

export default function Card({max, min, name, img, onClose, temp}) {
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
                </div>
            </div>
        </div>
    )
}
