import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  componentDidUpdate(){
    console.log('App updated');
  }
  
  render (){
    console.log('App render');
    return (
      <div className="App">
        <Counter />        
    </div>
    );   
  }
}

export default App;
