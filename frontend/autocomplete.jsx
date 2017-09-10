import React from 'react';
import ReactDOM from 'react-dom';

class AutoComplete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {inputVal: ""};
  }

  render () {
    return (
      <div id="autocomplete">
        <input type="text" name="auto-input" value=""></input>
        <ul>
          {this.props.names.map( (el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    );
  }




}

export default AutoComplete;
