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
    Name : {firstname:"Pravin", lastname: "Kumar"}, // i have use an object here so in usestate i will also *
    role: "Full Stack Developer", // suppose here i can use here the object also 
   };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p className='title'>Hello React Developers ? What are you building...</p>
          <p>My name is {this.state.Name.firstname} {this.state.Name.lastname} , I work as a {this.state.role}  </p>
          <button onClick={()=> 
          {
              this.setState({
                Name:{firstname:"Navin",lastname:"Kumar"}});
                console.log(this.state)
          }
          }> Click Here </button>
        </header>
      </div>
    );
  }
  }

export default App;
