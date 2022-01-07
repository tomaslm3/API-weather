import React, { useEffect, useState } from "react";
import './SearchBar.css'
export function validate(input) {
  let error = {}
  if (!input) {
  error.city = 'City name is required'
  } else if ( /^(?:\d+)$/.test(input)) {
    error.city = "City is invalid";
  }
  return error;
}
export default function SearchBar({ onSearch, success, switchTheme, theme }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState({})
  const [isSubmitting, setisSubmitting] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setCity(
      value
    )
  }

  const handleSubmit = e => {
    e.preventDefault();
    let objError = validate(city);
    setError(objError);
    setisSubmitting(true);
  }
  
  useEffect(() => {
    if(Object.keys(error).length === 0 && isSubmitting)
    {success()
      onSearch(city);
    setCity('')}

  }, [error])

  return (
    <div className="searchBar">
      <div className="form-bar">
        <form onSubmit={handleSubmit}>
          <input
            className='input'
            type={"text"}
            name="city"
            placeholder="Ciudad..."
            value={city}
            onChange={handleChange}
          />
            {
              error.city && (<p>{error.city}</p>)
            }
          <input className="button" type={"submit"} value={"Agregar"} />
        </form>
      </div>
      <div className="buttonTheme">
        <button className="theme" onClick={switchTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}
