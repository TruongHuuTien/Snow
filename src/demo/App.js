import React, { Component } from 'react';
import './App.scss';
import '../snow.scss';
import Button from '../components/button/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text="Snow Button" icon="user" onClick={() => console.log('Click on Snow Button')} />
      </div>
    );
  }
}

export default App;
