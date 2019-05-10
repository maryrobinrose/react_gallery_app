//Import React library
import React, { Component } from 'react';
//Interact with the DOM
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config.js';

//Connect to App Components
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import GalleryItem from './Components/GalleryItem';
import Search from './Components/Search';

//Create component class
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      sunsets: [],
      waterfalls: [],
      rainbows: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
    this.performSearch('sunsets');
    this.performSearch('waterfalls');
    this.performSearch('rainbows');
  }

  performSearch = (query = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApi}&tags=${query}&per_page=&format=json&nojsoncallback=1`)
      .then(response => {
          //-->>Add if then statements for searches
        this.setState({
          images: response.data.data,
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
      //-->>Add <BrowserRouter>?
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
              : <GalleryItem data={this.state.gallery}/>
            }
          </div>
        </div>
    );
  }

}

//export default App;
