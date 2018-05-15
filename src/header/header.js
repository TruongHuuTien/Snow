import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="header-bar">
          <h2 id="header-title">Snow</h2>
        </div>
      </div>
    );
  }
}