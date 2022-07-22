import React, { Component } from "react";
import Country from "./components/County/Country";
import axios from "axios";

class App extends Component {
  getCountryData = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    console.log(data);
  };

  componentDidMount() {
    this.getCountryData();
  }

  render() {
    return (
      <div>
        hii i am app
        <Country />
      </div>
    );
  }
}

export default App;
