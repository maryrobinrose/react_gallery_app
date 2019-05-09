//Stores:
  //app title
  //logo

//Connect to React and routes
import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Stats  />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
    <li><NavLink exact to="/">Home</Link></li>
    <li><NavLink to="/About">About</Link></li>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: Proptypes.arrayOf(Proptypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;


//Route Paths
<Route path="/courses/html" component={HTML} />
