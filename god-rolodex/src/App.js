// now this is how we are going to use class component in react 
// first import component from react 
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {  // now in case of a functional component we just return the HTML but in case of class component you 
  // have to use render() and then return the html template
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <p>
           Hello React Developer's ? What are you building...
          </p>
        </header>
      </div>
    );
  }
  }

export default App;
