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
                <input type={'text'} placeholder="Ciudad..." value={city} onChange={e => setCity(e.target.value)} />
                <input type={'submit'} value={'Agregar'} />
            </form>
        </div>
    );
};