import React, { Component }from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
      players: [
        {
        name: "Guil",
        score: 50,
        id: 1
      },
      {
        name: "Treasure",
        score: 85,
        id: 2
      },
      {
        name: "Ashley",
        score: 95,
        id: 3
      },
      {
        name: "James",
        score: 80,
        id: 4
      }
    ]
  }:

  //Remove Items from State
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header
          title="Scoreboard"
          totalPlayers={props.initialyPlayers.length}
        />

        {/* Players list */}
        //map loops over players
        {this.state.players.map( player =>
          <Player
            name={player.nae}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
  );
}

export default App;
