import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoitem'

class App extends Component {
  constructor() {
    super();
    this.todoItem = [
      'Take coffee',
      'Play badminton',
      'Read book'
    ]
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItem.map((item,index) => <TodoItem key={index} title={item}/> )
        }
      </div>
    );
  }
}

export default App;
