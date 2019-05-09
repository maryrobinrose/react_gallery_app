//Connect to React and routes
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

//Connect to App Components
import { Provider } from './Context';
import './App.css';
import axios from 'axios';
import Header from './Header';
import Gallery from './Gallery';
import Search from './Search';
import apiKey from 'config.js';

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
    this.performSearch('sunsets'); //?

  }


  performSearch = (query = 'sunsets') => {
    //change to flickr
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a76b7db2a7dfe0204f80447c3b43c5af&tags=${query}&per_page=&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

const App = () => {

      return (
        //Renders route router that listens to URL changes
        <BrowserRouter>
          <div className='scoreboard'>
            <Header />
            <Route exact path="/" component={Home} />
            <AddPlayerForm />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
