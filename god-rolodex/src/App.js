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
  constructor(){  // ""* 1. First this.state will Work   ""
    super();
   this.state ={ // this we have created an array of user 
    user: [],
    searchString: '' //we have intialized the string that will store the value of the search users
  };
  console.log("1"); // how react class component code flows 
  }
  componentDidMount(){ // ""* 3. Third the compnentdidmount will run""
    console.log("3");
    fetch('https://jsonplaceholder.typicode.com/users') // this will return a promise 
    .then((response) => response.json())    // it will also return a promise 
    .then((users) => this.setState(() => { // now we use setstate to save the user json data format
      console.log(users);
      return { user : users };      // copying user and creating objects one by one
    },
    () => {
      // console.log(this.state);
    }
  ));
  };
  render(){ // ""* second The render state will work ""
    const filterUsers = this.state.user.filter((user) => {
            return user.name.toLocaleLowerCase().includes(this.state.searchString);
        });
    console.log("2");
    return (
      <div className="App">
      <input className='search-box' 
        type='search' 
        placeholder='Search Users' 
        onChange={(event) =>{
          const searchString = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return {searchString};
          });
        }}
        />
        <header className="App-header">
          {filterUsers.map((g) => {
            return (
            <div  key={g.id}>
              <p>{g.name}</p>
            </div>
          );
          })
          }
        </header>   
      </div>
    )
  }};
export default App;
