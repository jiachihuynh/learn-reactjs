import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoitem'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'Take coffee', isComplete: true},
        { title: 'Play badminton', isComplete: false},
        { title: 'Read book', isComplete: true},
        { title: 'Collect music', isComplete: true}
      ]
    }
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {todoItems.length > 0 &&
          todoItems.map((item,index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)} />)
        } 
        {todoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
