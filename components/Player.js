import React { PureComponent }from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() {
    const {
      name,
      id,
      score,
      index,
    } = this.props;
    console.log(props.name + 'rendered');

    return (
      <div className="player">
      <Consumer>
        { context => (
          <span className="player-name">
            <button className="remove-player" onClick{() => context.actions.removePlayer}(id) }>✖</button>
            {name}
          </span>
        )}
      </Consumer>


        <Counter
        score={props.score}
        index={props.index}
         />
      </div>
    );
  }
}

Player.propTypes = {

};

export default Player;
