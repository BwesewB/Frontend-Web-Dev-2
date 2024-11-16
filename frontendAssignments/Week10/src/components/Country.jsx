import React from "react";

const Country = ({ country }) => {
  const { flags, name, capital, population, area, continents, subregion, latlng } = country;

  const googleMapsUrl = `https://www.google.com/maps?q=${latlng[0]},${latlng[1]}`;

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <img src={flags.png} alt={`${name.common} flag`} style={{ width: "50px" }} />
      <h3>{name.common}</h3>
      <p>Capital: {capital?.[0]}</p>
      <p>Population: {population.toLocaleString()}</p>
      <p>Area: {area.toLocaleString()} km²</p>
      <p>Continents: {continents.join(", ")}</p>
      <p>Subregion: {subregion}</p>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        Show on Google Maps
      </a>
    </div>
  );
};

export default Country;
