import React from 'react';
import ReactDOM from 'react-dom';
import OPENWEATHER_API from './apikey.js';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weather: null};
    this.getWeather = this.getWeather.bind(this);
    this.temp = this.temp.bind(this);
    this.clearness = this.clearness.bind(this);
    this.place = this.place.bind(this);
  }

  render() {
    let content = <div></div>;
    if (this.state.weather) {
      content = <div id="weather-data">
        <h1>The weather in {this.place()}: </h1>
        <br></br>
        <h2>{this.temp()}°</h2>
        <h2>{this.clearness()}</h2>
      </div>;
    } else {
      content = <div>Loading weather...</div>;
    }
    return (
      <div id="weather-app">
        {content}
      </div>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&forecast?id=524901&APPID=${OPENWEATHER_API}`;
    let weatherData = null;

    let request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === XMLHttpRequest.DONE ) {
        const data = JSON.parse(request.responseText);
        this.setState( {weather: data} );
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  temp() {
    let kTemp = this.state.weather.main.temp;
    return (kTemp * (9/5) - 459.67).toFixed(1);
  }

  clearness() {
    let clear = this.state.weather.weather[0].main;
    return clear;
  }

  place() {
    let place = this.state.weather.name;
    return place;
  }
}

export default Weather;
