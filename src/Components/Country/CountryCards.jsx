import React from "react";

function CountryCards({ cards, searchValue }) {
  const filteredCountries = cards.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(searchValue.toLowerCase());
  });

  return (
    <div>
      {filteredCountries.map((country, index) => (
        <div className="image" key={index}>
          <img src={country.flags.png} alt={country.name.common} />
          <h2 className="text-white">{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default CountryCards;
