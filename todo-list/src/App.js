import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoitem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <p>
            Edit <code>src/App.js</code> Hello World.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
