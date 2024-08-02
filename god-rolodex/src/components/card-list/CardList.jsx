import React from 'react'
import { Component } from 'react';
import '../../App.css'

class CardList extends Component{
  render(){
    const {users} = this.props
    console.log(users)
    return(
      <div className='App'>
      <div ></div>
        {users.map((g) => {
          return <h1 key= {g.id}>{g.name}</h1>
        })}
      </div>
    )
  }
}
export default CardList;