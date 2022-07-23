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

  onChange = (e) => {
    this.setState({ inputVal: e.target.value });

    const countries = this.state.details.filter((currItem) => {
      const name = currItem.name.common;
      // const searchVal = e.target.value.toLowerCase();
      // const currName = currItem.name.toLowerCase();
      return name.includes(e.target.value);
    });
    return this.setState({ details: countries });
  };

  getCountryData = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    this.setState({ details: data });
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
