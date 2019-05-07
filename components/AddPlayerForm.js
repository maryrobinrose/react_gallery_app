import React, { Component } from 'react';
import { Consumer } from './Context';


class AddPlayerForm extends Component {
  const playerInput = React.createRef();

  render() {
    console.log(this.playerInput)
    return (
      <Consumer>
        { context => {
          handleSubmit = (e) => {
            e.preventDefault();
            context.actions.addPlayer(this.playerInput.current.value);
            e.currentTarget.reset();
          }

          return (
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                ref={this.playerInput}
                value={this.state.value}
                placeholder="Enter a player's name"
              />
              <input
                type="submit
                value="Add Player"
              />
            </form>
          );
        }}
      </Consumer>

    );
  }
}

export default AddPlayerForm;
