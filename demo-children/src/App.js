import React, {Component} from 'react';
import './App.css';
import Accordion from './components/accordion';

class App extends Components {
  render(){
    return (
      <div className="App">
        <Accordion headig="Heading" content="Hello Jiachi"/>
      </div>
    );
  }
}

export default App;
