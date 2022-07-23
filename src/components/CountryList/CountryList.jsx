import React, { Component } from "react";
import { CountryContext } from "../../App";
import Country from "../County/Country";
import "./CountryList.css";

class CountryList extends Component {
  getCountry = (arr) => {
    return arr.map((currItem) => {
      return (
        <Country
          flag={currItem.flags.svg}
          name={currItem.name.official}
          capital={currItem.capital}
          region={currItem.region}
          population={currItem.population}
        />
      );
    });
  };

  render() {
    return (
      <CountryContext.Consumer>
        {(arr) => {
          return (
            <div>
              <div className="country-list-wrapper">{this.getCountry(arr)}</div>
            </div>
          );
        }}
      </CountryContext.Consumer>
    );
  }
}

export default CountryList;
