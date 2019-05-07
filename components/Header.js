import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch'

const Header = () => {
  return (
    <header>
      <Stats  />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
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
