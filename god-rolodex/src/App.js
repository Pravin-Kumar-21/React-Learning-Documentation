// now this is how we are going to use class component in react 
// first import component from react 

// Note the setstate is asychronously done . To make the set state up to date instead of creating a function inside
// of the set state we pass a function inside the setstate
// setstate(() => {}, () => {}) the first function is the arugument function and the second function is the callback function

// like this 
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
              this.setState(() =>{
                return { 
                  Name:{firstname:"Navin",lastname:"Kumar"}
                };
              }, // first function completion which is the argument 
              () => {
                  console.log(this.state);
                } // second function which is the callback function
              );
          }} // Now the setstate() will be up to date
          > Click Here </button>
        </header>
      </div>
    );
  }
  }

export default App;
