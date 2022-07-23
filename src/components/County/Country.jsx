import React, { Component } from "react";
import "./Country.css";
class Country extends Component {
  render() {
    return (
      <div>
        <img src={this.props.flag} width={260} className="flag" />
        <div>
          <div>{this.props.name}</div>
          <div>Capital : {this.props.capital}</div>
          <div>Region : {this.props.region}</div>
          <div>Population : {this.props.population}</div>
        </div>
      </div>
    );
  }
}
export default Country;
