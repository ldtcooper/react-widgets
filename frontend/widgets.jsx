import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';
import Names from './names.js';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <AutoComplete names={Names}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  const root = document.querySelector('#main');
  ReactDOM.render(<Root />, root);
});
