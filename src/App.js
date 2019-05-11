//Import React library
import React, { Component } from 'react';
//Interact with the DOM
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import apiKey from '/config.js';

//Connect to App Components
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Search from './Components/Search';

//Create component class
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sunsets: [],
      waterfalls: [],
      rainbows: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch('sunsets');
    this.performSearch('waterfalls');
    this.performSearch('rainbows');
  }

  performSearch = (query = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          [query]: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  //Create page HTML
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">Image Search</h1>
              <Search onSearch={this.performSearch}/>
              <Header />
            </div>
          </div>
          <div className="main-content">
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <Gallery data={this.state.sunsets} />
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }

}
