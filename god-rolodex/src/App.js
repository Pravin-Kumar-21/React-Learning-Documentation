// now this is how we are going to use class component in react 
// first import component from react 

// Note the setstate is asychronously done . To make the set state up to date instead of creating a function inside
// of the set state we pass a function inside the setstate
// setstate(() => {}, () => {}) the first function is the arugument function and the second function is the callback function

// Starting the project God Rolodex > Now we will learn how to map array to elements
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {  
  constructor(){
    super();
   this.state ={ // this we have created an array of user 
    user: [],
   };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') // this will return a promise 
    .then((response) => response.json())    // it will also return a promise 
    .then((users) => this.setState(() => { // now we use setstate to save the user json data format
      return { user : users };
    },
    () => {
      console.log(this.state);
    }
  ));
  };
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.user.map((g) => {
            return (
            <div  key={g.id}>
              <p>{g.username}</p>
            </div>
          );
          })
          }
        </header>   
      </div>
    )
  }};
export default App;
