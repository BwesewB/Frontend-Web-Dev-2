import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();

  if (!state || !state.data) return <div>No country selected.</div>;

  const { data } = state;

  return (
    <div className="details-container">
      <h2>{data.name.common}</h2>
      <img src={data.flags.svg} alt={`Flag of ${data.name.common}`} />
      <p><strong>Capital:</strong> {data.capital ? data.capital[0] : "N/A"}</p>
      {/* <p><strong>Region:</strong> {data.region}</p> */}
      <p><strong>Located In:</strong> {data.subregion}</p>
      {/* <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {data.area.toLocaleString()} km²</p> */}
    </div>
  );
}

export default Details;
