import React, { Component } from 'react';

class Search extends Component {
  state = {
    input: ''
  };
  handleInput = event => {
    this.setState({ input: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.input);
    this.setState({ input: '' });
  };
  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <label>
          <input
            className="search-field"
            onChange={this.handleInput}
            placeholder="Search by Name"
            value={this.state.input}
          ></input>
        </label>
        <button className="button">Search</button>
      </form>
    );
  }
}

export default Search;
