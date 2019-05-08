//Connect to React and routes
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Connect to App Components
import { Provider } from './Context';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Search from './Search'

//import flickr key
const flickrKey = 

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();

  }


  performSearch = (query = 'cats') => {
    //change to flickr
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
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

    //Remove Items from State
    handleRemovePlayer = (id) => {
      this.setState( prevState => {
        return {
          players: prevState.players.filter( p => p.id !== id)
        };
      });
    }

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
