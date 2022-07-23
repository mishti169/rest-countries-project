import React, { Component, createContext } from "react";
import axios from "axios";
import CountryList from "./components/CountryList/CountryList";
import Search from "./components/Search/Search";
export const CountryContext = createContext([]);

class App extends Component {
  state = {
    details: [],
    inputVal: "",
  };
  countryData = [];

  onChange = (e) => {
    this.setState({ inputVal: e.target.value });
    console.log(e.target.value);

    const countries = this.countryData.filter((currItem) => {
      const searchVal = e.target.value.toLowerCase();
      const currName = currItem.name.common.toLowerCase();
      return currName.includes(searchVal);
    });
    return this.setState({ details: countries });
  };

  getCountryData = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    this.setState({ details: data });
    this.countryData = data;
  };

  componentDidMount() {
    this.getCountryData();
  }

  render() {
    return (
      <CountryContext.Provider value={this.state.details}>
        <Search inputVal={this.state.inputVal} onChange={this.onChange} />
        <CountryList />
      </CountryContext.Provider>
    );
  }
}

export default App;
