import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'Google',
    url: 'https://google.com',
    author: 'Jiachi',
    objId: 0
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com',
    author: 'Liar',
    objId: 1
  },
  {
    title: 'Apple',
    url: 'https://apple.com',
    author: 'Ky Huynh',
    objId: 2
  }
];

export default class App extends Component { 
  constructor(props){
    super(props);
    
    this.state = {
      list,
    };

    //this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
    const updatedList = this.state.list.filter(item => item.objId !== id);
    this.setState({ list: updatedList});
  }

  render(){
    const { list } = this.state;
    return (
      <div className="App">
        {list.map((item,index) =>
          <div key={index}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>
              <button onClick={ () => this.onDismiss(item.objId) }
                type="button"
              >
                Dismiss
              </button>  
            </span>
          </div>  
        )}
      </div>
    );
  }
}

