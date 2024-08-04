import { useState } from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList.jsx';
import SearchBox from './components/search-box/SearchBox.jsx';
// // now this is how we are going to use class component in react 
// // first import component from react 

// class App extends Component {  
//   constructor() {  
//     super();
//     this.state = { 
//       users: [], // this we have created an array of user 
//       searchString: '', // we have intialized the string that will store the value of the search users
//     };
//   }

//   componentDidMount() { 
//     // ""* 3. Third the componentdidmount will run""
//     fetch('https://jsonplaceholder.typicode.com/users') // this will return a promise 
//       .then((response) => response.json())    // it will also return a promise 
//       .then((users) => 
//         this.setState(() => { // now we use setstate to save the user json data format
//           return { users };      // copying user and creating objects one by one
//         })
//       );
//   }

//   // This is a function that will take an argument from the user and then store it in the value of searchString
//   

//   render() { 
//     // ""* second The render state will work ""
//     const { users, searchString } = this.state;
//     const filteredUsers = users.filter((user) => {
//       return user.name.toLowerCase().includes(searchString);
//     });

//     // instead of using this.state everywhere what we can do is 
//     return (
//       <div className='App'>
//       <h1>Robots Rolodex</h1>
//       <div>
//         <SearchBox onchangeHandler ={this.onSearchChange} className='User-Search-box' placeholder='Search Users'/>
//       </div>
//       <div>
//         <CardList users={filteredUsers} />
//       </div>
//       </div>
//     );
//   }
// }
// // Next what i will do i will make the search box a generic search box by making search-box as new component
// export default App;


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class Component xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*------------Till now we have studied Class Components now we will study Functional Component------------*/

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Functional Components xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

 

// const GetUsers = () =>{
//   fetch('https://jsonplaceholder.typicode.com/users') 
//       .then((response) => response.json())   
//       .then((users) => 
//        () => { 
//           return { users };   
//         })
//       );
// }

const App = ()=>{
  
  console.log("Render");
  // This is useState hook ->
  // * It works on the concept of array destructuring for eg: myarr = [1,2,3]; mapvalues['a','b','c'] now a=1 b=2 c=3  this is called array destructuring 
  // * it returns an array of two elements one is a value containing variable im my case it is "users"
  // * and the second one is a function that can used any where to update the value in my case  it is "setUsers"
  // 1. it does not render its functional component until it finds any change in the current state which is ('') for now 
  // 2. we can even pass variables or string inside the hook 
  // 3. most important when we want to change the value we the function 

  const [searchvalue,setString] = useState('');

  const [users, setUsers] = useState([]);
  // this is causing infinite rendering of the function to stop this we need to use useEffect hook
  fetch('https://jsonplaceholder.typicode.com/users') 
  .then((response) => response.json())   
  .then((users) => {
    setUsers(users)
  } )
  
  const onSearchChange = (event) => { // created an event that take value from event 
    const searchString = event.target.value.toLowerCase(); // created a searchstring variable and stored lower case characters of event.target.value 
    setString(searchString); // passed it to the setString function where it will update the value to the usestate hook
  }
  // filter command works by creating a new filtered array in return when we are filtering something from an array 
  //user => stores the users with the condition 
  // filter user will store the filtered users from the array
  const filteredUsers = users.filter(user => { //
    return user.name.toLowerCase().includes(searchvalue);
  });
      return (
    <div className='App'>
      <h1 className='app-title'>Robots Rolodex</h1>
      <div>
        <SearchBox 
          onchangeHandler ={onSearchChange} 
          className='User-Search-box' 
          placeholder='Search Users'
        />
        <CardList users={filteredUsers} />
      </div>
    </div>
  )
};
export default App;