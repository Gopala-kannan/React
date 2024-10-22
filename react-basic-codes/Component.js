// class Component

// Reference

import {  Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

// Context

class Button extends Component {
  static contextType = ThemeContext;   // static sites are simple and creaated using HTML , CSS and JS ,,, Delivered to the user exctly as they are stored on the server,,,, Pages are already pre-built and devliverred to your browser as is they don't change based on user interactions.

  render() {
    const theme = this.context;
    const className = 'button-' + theme
    return(
      <button className = {className}>
         {this.props.children}
      </button>
    )
  }
}
