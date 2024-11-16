import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState({ continent: "", subregion: "", top10: "", sort: "" });

  useEffect(() => {
    // Fetch data from API
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const applyFilters = () => {
    let data = [...countries];

    // Apply Continent Filter
    if (filter.continent) {
      data = data.filter(country => country.continents.includes(filter.continent));
    }

    // Apply Subregion Filter
    if (filter.subregion) {
      data = data.filter(country => country.subregion === filter.subregion);
    }

    // Apply Top 10 Filter
    if (filter.top10) {
      data = data.sort((a, b) => b[filter.top10] - a[filter.top10]).slice(0, 10);
    }

    // Apply Sorting
    if (filter.sort === "alphabetical") {
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    setFilteredCountries(data);
  };

  useEffect(applyFilters, [filter, countries]);

  const updateFilter = (key, value) => {
    // Reset conflicting filters
    if (key === "continent") setFilter({ ...filter, continent: value, subregion: "" });
    else if (key === "subregion") setFilter({ ...filter, subregion: value, continent: "" });
    else setFilter({ ...filter, [key]: value });
  };

  return (
    <div
      style={{
        display:"flex",
        flexDirection:"column",
        width:"80vw",
      }}
    >
      <h1>Countries of the World</h1>
      <div>
        <label>
          Filter by Continent:
          <select onChange={(e) => updateFilter("continent", e.target.value)}>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </label>

        <label>
          Filter by Subregion:
          <input
            type="text"
            onChange={(e) => updateFilter("subregion", e.target.value)}
            placeholder="Enter subregion"
          />
        </label>

        <label>
          Top 10:
          <select onChange={(e) => updateFilter("top10", e.target.value)}>
            <option value="">None</option>
            <option value="population">By Population</option>
            <option value="area">By Area</option>
          </select>
        </label>

        <label>
          Sort Alphabetically:
          <input
            type="checkbox"
            onChange={(e) => updateFilter("sort", e.target.checked ? "alphabetical" : "")}
          />
        </label>
      </div>
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default App;