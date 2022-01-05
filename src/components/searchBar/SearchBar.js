import e from "express";
import react, { useState } from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('');

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(city);
                setCity('');
            }}>
                <input type={'text'} placeholder="Ciudad..." value={city} />
                <button type="submit" value={submit}>Agregar</button>
            </form>
        </div>
    );
};