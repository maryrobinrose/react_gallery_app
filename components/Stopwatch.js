import React { Component } from 'react';

class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTimeL 0
  };

//Lifecycle hook
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    if(this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState = ({
        previousTime: now,
        elapsedTime: prevState.elapesTime + (now-this.state.previousTime)
      }));
    }
  }

  handleStopwatch = () => {
    this.setState( prevState => ({
      isRunning: !prevState.isRunning
    }));
    //If not this state is running
    if (!this.state.isRunning) {
      this.setState({previousTime: Date.now() });
    }
  }

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  }

  render() {
    const seconds = Math.floor(this.state.elapedTime / 1000);
    return {
      <div className="Stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          { seconds }
        </span>
        <button onClick={this.handleStopwatch}>
          //If isRunning is true, display text Stop, otherwise display text Start
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    };
  }
}

export default Stopwatch;
