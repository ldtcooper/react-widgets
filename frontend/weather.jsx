import React from 'react';
import ReactDOM from 'react-dom';
import OPENWEATHER_API from './apikey.js';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(pos) {
      console.log(pos);
    });
  }
}

export default Weather;
