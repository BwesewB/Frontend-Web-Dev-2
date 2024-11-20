import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null); // Track selected country
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountrySelect = (event) => {
    const value = event.target.value;

    if (value === "") {
      // Reset the selection when "Select a country" is chosen
      setSelectedCountry(null);
      navigate("/countries");
    } else {
      const selectedCountry = countries.find((country) => country.cca2 === value);
      if (selectedCountry) {
        setSelectedCountry(selectedCountry);
        navigate(`/countries/${selectedCountry.cca2}`, { state: { data: selectedCountry } });
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="countries-container">
      <h1>World Kingdoms</h1>
      <select onChange={handleCountrySelect} defaultValue="">
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      {/* Conditionally render Outlet if a country is selected */}
      {selectedCountry ? <Outlet /> : <p></p>}
    </div>
  );
}

export default Countries;
