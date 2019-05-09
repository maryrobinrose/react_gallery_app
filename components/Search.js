//Create a form component for the search. Since forms deal with a significant amount of unique information that can be very specific to the particular form being used, a stateless component might not be the best option. So feel free to manage the form-specific state in the form component rather than trying to keep you form stateless.

import React, { Component } from 'react';

export default class SearchForm extends Component {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
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
