//Stores:
  //app title
  //logo

//Connect to React and routes
import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
    </header>
    //<li><NavLink exact to="/">Home</Link></li>
    //<li><NavLink to="/About">About</Link></li>
  );
}


export default Header;


//Route Paths
//<Route path="/courses/html" component={HTML} />
