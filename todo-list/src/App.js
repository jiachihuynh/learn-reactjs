import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoitem'

class App extends Component {
  constructor() {
    super();
    this.todoItem = [
      { title: 'Take coffee', isComplete: true},
      { title: 'Play badminton', isComplete: false},
      { title: 'Read book', isComplete: true},
      { title: 'Collect music', isComplete: true}
    ]
  }

  render() {
    return (
      <div className="App">
        {this.todoItem.length > 0 &&
          this.todoItem.map((item,index) => 
            <TodoItem key={index} item={item}/> )
        }
        {this.todoItem.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
