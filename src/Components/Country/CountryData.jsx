import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCards from "./CountryCards";
import "./CountryData.css";

function CountryData() {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountryData(res.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center m-3">Country App</h1>
      <input
        id="search"
        type="text"
        placeholder="Search Your Country"
        value={search}
        onChange={handleSearch}
      />
      <hr />
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : errorMessage ? (
        <h2 className="error">{errorMessage}</h2>
      ) : (
        <CountryCards cards={countryData} searchValue={search} />
      )}
    </div>
  );
}

export default CountryData;
