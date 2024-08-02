import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList.jsx';
import SearchBox from './components/search-box/SearchBox.jsx';

// now this is how we are going to use class component in react 
// first import component from react 

class App extends Component {  
  constructor() {  
    super();
    this.state = { 
      users: [], // this we have created an array of user 
      searchString: '', // we have intialized the string that will store the value of the search users
    };
  }

  componentDidMount() { 
    // ""* 3. Third the componentdidmount will run""
    fetch('https://jsonplaceholder.typicode.com/users') // this will return a promise 
      .then((response) => response.json())    // it will also return a promise 
      .then((users) => 
        this.setState(() => { // now we use setstate to save the user json data format
          return { users };      // copying user and creating objects one by one
        })
      );
  }

  // This is a function that will take an argument from the user and then store it in the value of searchString
  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchString };
    });
  }

  render() { 
    // ""* second The render state will work ""
    const { users, searchString } = this.state;
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchString);
    });

    // instead of using this.state everywhere what we can do is 
    return (
      <div className='App'>
      <div>
        <SearchBox onchangeHandler ={this.onSearchChange} className='User-Search-box' placeholder='Search Users'/>
      </div>
      <div>
        <CardList users={filteredUsers} />
      </div>
      </div>
    );
  }
}
// Next what i will do i will make the search box a generic search box by making search-box as new component
export default App;
