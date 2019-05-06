/////**React Basics**/////

//This is just an object, not an actual h1
const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title.' },
  'My First React Element!'
);
//or using JSX - not real HTML
const title = <h1>My First React Element</h1>;
//change to quotes
const title = 'My First React Element';


const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React node and render it into the DOM.'
);
//or using JSX
const desc = <p>I just learned how to create a React node and render it into the DOM</p;>
//change to quotes
const desc = 'I just learned how to create a React node and render it into the DOM'

const header = React.createElement(
  'header',
  null
  title,
  desc
);

//or using JSX
const header = (
  <header>
      <h1>My First React Element</h1>;
      <p>I just learned how to create a React node and render it into the DOM</p;>
  </header>
);
//change to curly braces - JSX Expression
const header = (
  <header>
      <h1 id={myTitleID}>{ name }'s First React Element</h1>;
      //className vs class
      <p className='main-desc'>{ desc }</p;>
  </header>
);

const myTitleID = 'main-title';
const name = 'Mary';

ReactDOM.render(
  //render to the page
  header,
  //container where code is rendered by React
  document.getElementById('root')
);

//Everything in React is a Component
  //A piece of UI you can reuse

//Iterating and Rendering with map()
const players = [
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
];

//Create a Component
function Header(props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Players: { props.totalPlayers(5) }<span>
    </header>
  );
}

//Arrow function Component
const HeaderTwo = (props) => {
    <header>
      <h1>{ props.title }</h1>
      <span className='Scoreboard'>Players: { props.totalPlayers }<span>
    </header>;
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
      {props.name}
      </span>

      <Counter score={props.score} />
    </div>
  );
}

const Counter = () => {
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className='counter-score'>35</span>
      <button className='counter-action decrement'> + </button>
  </div>
  );
}

const App = (props) => {
  return (
    <div className='scoreboard'>
      <Header
        title="Scoreboard"
        totalPlayers={props.initialyPlayers.length}
      />

      {/* Players list */}
      //map loops over players
      {props.initialyPlayers.map( player =>
        <Player
          name={player.nae}
          id={player.id}
          score={player.score}
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialyPlayers={players} />,
  document.getElementById('root')
);

//Props
  //A list of properties used to pass data to a component.
  //Define in component's JSX


//Use double quotes (") when writing props. HTML attributes commonly use double quotes instead of single, so props mirror this convention:

<Player
  name="Guil H"
  team="Treehouse"
/>

<Header
  title="My Scoreboard"
  totalPlayers={5}
  isFun={true}
/>

//Create a Component as a class - only type of components that let you use state (dynamic)
//Extends creates a child of another class
class Counter extends React.Component {

  //Create a Stateful component
  constructor() {
    //Call the constructor of the component class
    super()
    //Initialize component state (must be named state)
    this.state = {
      score: this.state.score + 1
    };

    //More reliable
    incrementScore() {
      this.setState( prevState => {
        return {
          score: prevState.score + 1
        };
      });
    }

    decrementScore() {
      this.setState({
        score: this.state.score - 1
      });
    }

  render() {
    return (
      <div className='counter'>
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

//Remove Items from State
handleRemovePlayer = (id) => {
  this.setState( prevState => {
    return {
      players: prevState.players.filter( p => p.id !== id)
    }
  });
}

//Separating Function Components Into Modules
import React from 'react'; //put in each Module

export default Header //end of each module

import Header from './Header';

//Unidirectional Data Flow//
//Lifting State Up
