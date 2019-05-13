//Import React library
import React, { Component } from 'react';

export default class Search extends Component {

  //Gets updated with onSearchChange
  state = {
    searchText: ''
  }

  //Text user types into input field
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  //Called when form is submitted
  handleSubmit = e => {
    this.props.history.push(
      `/search/${this.state.searchText}`
    );
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >

        <input type="search"
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}
