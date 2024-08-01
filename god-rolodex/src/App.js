// now this is how we are going to use class component in react 
// first import component from react 

// Note the setstate is asychronously done . To make the set state up to date instead of creating a function inside
// of the set state we pass a function inside the setstate
// setstate(() => {}, () => {}) the first function is the arugument function and the second function is the callback function

// Starting the project God Rolodex > Now we will learn how to map array to elements
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList';
class App extends Component {  
  constructor(){  // ""* 1. First this.state will Work   ""
    super();
   this.state ={ // this we have created an array of user 
    user: [],
    searchString: '', //we have intialized the string that will store the value of the search users
  };
  }
  componentDidMount(){ // ""* 3. Third the compnentdidmount will run""
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
  // This is a function that will take an argument from the user and then store it in the value of seatchString
onserchChange = (event) =>{
  const searchString = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return {searchString};
  });
}
// instead of using this.sate everywhere what we can do is 
render(){ // ""* second The render state will work ""
  const { user, searchString } = this.state;
  const {onserchChange} = this;
    const filterUsers = user.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchString); // here removed this.state
        });
    return (
      <div className="App">
      <input className='search-box' 
        type='search' 
        placeholder='Search Users' 
        onChange={onserchChange} // here removed this.
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


// ---------------------------------------React is Love--------------------------------------- //