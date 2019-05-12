//Import React library
import React, { Component } from 'react';
//Interact with the DOM
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config.js';

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

  performSearch = (query) => {
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
          <div className="container">
              <h1 className="main-title">Image Search</h1>
              <Search onSearch={this.performSearch}/>
              <Header />
                <Switch>
                    <Route exact path="/sunsets" render={ () =>
                      (this.state.loading)
                      ? <p>Loading...</p>
                      : <Gallery data={this.state.sunsets} query="sunsets" />
                    } />
                    <Route exact path="/waterfalls" render={ () =>
                      (this.state.loading)
                      ? <p>Loading...</p>
                      : <Gallery data={this.state.waterfalls} query="waterfalls" />
                    } />
                    <Route exact path="/rainbows" render={ () =>
                      (this.state.loading)
                      ? <p>Loading...</p>
                      : <Gallery data={this.state.rainbows} query="rainbows" />
                    } />

                </ Switch>

          </div>
      </BrowserRouter>
    );
  }
}
