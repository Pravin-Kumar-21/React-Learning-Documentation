import React from 'react'
import { Component } from 'react';
import '../../App.css'
import './CardList.css'

class CardList extends Component{
  render(){
    const {users} = this.props
    return(
        <div className='card-list' >
          {users.map((g) => (
          <div className='card-container' key={g.id}>
            <img alt={`user: ${g.name}`} src={`https://robohash.org/${g.id}?set=set3&size=200x200`}/>
            <h3>{g.name}</h3>
            <p>{g.email}</p>
          </div>  
          ))}
        </div>
    )
}
};
export default CardList;