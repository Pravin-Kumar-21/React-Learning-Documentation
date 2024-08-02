import React from 'react'
import { Component } from 'react';
import '../../App.css'
import './CardList.css'
import Card from './../card/card'

class CardList extends Component{
  render(){
    const {users} = this.props
    console.log(users)
    return(
      <div className='card-list' >
      {users.map((g) => {
        return <Card objects ={g}/>
      })}
      </div>
    )
}
};
export default CardList;