import React, { useState } from "react";

export function validate(input) {
  let error = {}
  if (!input) {
  error.city = 'City name is required'
  } else if (!/\S+@\S+\.\S+/.test(input)) {
    error.city = "City is invalid";
  }
  return error;
}
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState({})

  let handleInputChange = (e) => {
    setCity(e.target.value)

    const objError = validate(e.target.value);
    setError(objError);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          type={"text"}
          placeholder="Ciudad..."
          value={city}
          onChange={handleInputChange}
          name="city"
          className={error.city && "danger"}
        />
          {
            error.city && (<p>{error.city}</p>)
          }
        <input type={"submit"} value={"Agregar"} />
      </form>
    </div>
  );
}
