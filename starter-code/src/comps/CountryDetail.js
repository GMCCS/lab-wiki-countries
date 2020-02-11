import React from "react";
import countriesList from "../countries.json";

const CountryDetails = props => {
  const { params } = props.match;
  const country = countriesList.filter(country => country.cca3 === params.id);

  console.log(country);

  return (
    <div className="detailsComp">
      <h2>{country[0].name.common}</h2>

      <h4>Capital: {country[0].capital}</h4>
      <h4>Area: {country[0].area} km2</h4>

      <ul>
        Borders:
        {country[0].borders.map(isCountryBorder => (
          <li>
            <a href={"/country/" + isCountryBorder}> {isCountryBorder} </a>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default CountryDetails;
