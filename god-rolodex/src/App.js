// now this is how we are going to use class component in react 
// first import component from react 
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {  // now in case of a functional component we just return the HTML but in case of class component you 
  // have to use render() and then return the html template
  constructor(){
    super();
   this.state ={
    Name : "Pravin",
    role: "Full Stack Developer",
   };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p className='title'>Hello React Developers ? What are you building...</p>
          <p>My name is {this.state.Name} , I work as a {this.state.role}  </p>
          <button onClick={
            ()=> {
              this.setState({Name: "Pravin Kumar"});
            }
            }> Click Here </button>
        </header>
      </div>
    );
  }
  }

export default App;
