
//Connect to React and routes
import React, { Component }from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Connect to App Components
import { Provider } from './Context';
import './App.css';
import Header from './Header';
//Nav
//Gallery
//Gallery Item
//Search
//Not Found

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


//Production build
  //npm run build
  //npm install -g serve
