import React, { Component }from 'react';
import { Provider } from './Context';
import './App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm'

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
        <div className='scoreboard'>
          <Header />
          <AddPlayerForm />
        </div>
    );
  }
}

export default App;
