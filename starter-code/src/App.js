import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import countriesList from "../src/countries.json";
import Countries from "./comps/Countries";
import CountryDetails from "./comps/CountryDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countriesList
    };
  }

  render() {
    return (
      <div className="App">
        <h4 className="navbar"> WikiCountries </h4>
        <div className="row">
          <div className="col-5">
            <div className="listGroup">
              {this.state.countries.map(country => (
                <Countries
                  key={country.cca3}
                  url={country.cca3}
                  name={country.name.common}
                  flag={country.flag}
                />
              ))}
            </div>
          </div>

          <div className="col-7">
            <Route path="/country/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
