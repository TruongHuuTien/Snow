import React, { Component } from 'react';
import Icon from '../icon';
import './button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      icon: {
        name:props.icon
      } 
    }
  }

  render() {
    return (
      <button onClick={ this.props.onClick }>
        <Icon { ...this.state.icon } />
        { this.state.text }
      </button>
    );
  }
}

export default Button;