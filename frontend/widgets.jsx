import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';


class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  const root = document.querySelector('#main');
  ReactDOM.render(<Root />, root);
});
