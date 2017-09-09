import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.handle = setInterval(() => {
      this.setState( {date: new Date() } );
    }, 1000);
  }

  render () {
    return (
      <div id="date-and-time">
        <h1>The time is {this.state.date.toTimeString()}</h1>
        <h1>The date is {this.state.date.toDateString()}</h1>
      </div>
    );
  }

  componentDidMount () {
    this.tick();
  }

  componentWillUnmount () {
    clearInterval(this.handle);
    this.handle = 0;
  }

}

export default Clock;
