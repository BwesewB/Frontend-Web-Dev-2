import React from "react";
import Country from "./Country";
import "../App.css"

const Countries = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default Countries;