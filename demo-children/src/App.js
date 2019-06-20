import React, {Component} from 'react';
import './App.css';
import Accordion from './components/accordion';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Accordion heading="Heading">
          Hello Jiachi, Have a nice day
        </Accordion>
      </div>
    );
  }
}

export default App;
