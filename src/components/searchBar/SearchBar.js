import React, { useEffect, useState } from "react";

export function validate(input) {
  let error = {}
  if (!input) {
  error.city = 'City name is required'
  } else if ( /^(?:\d+)$/.test(input)) {
    error.city = "City is invalid";
  }
  return error;
}
export default function SearchBar({ onSearch, success }) {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="city"
          placeholder="Ciudad..."
          value={city}
          onChange={handleChange}
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
