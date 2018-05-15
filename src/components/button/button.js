import React, { Component } from 'react';
import Icon from '../icon';
import './button.scss';

class Button extends Component {
  render() {
    return (
      <button>
        <Icon name='user' />
        Snow Button
      </button>
    );
  }
}

export default Button;