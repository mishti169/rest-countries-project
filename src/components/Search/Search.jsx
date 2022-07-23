import React, { Component } from "react";

class Search extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h2>Search any Country</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="search"
            value={this.props.inputVal}
            onChange={this.props.onChange}
            autoFocus
          />
        </form>
      </div>
    );
  }
}
export default Search;
