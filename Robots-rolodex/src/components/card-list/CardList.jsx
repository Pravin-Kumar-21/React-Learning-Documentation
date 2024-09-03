import React from 'react'
import { Component } from 'react';
import '../../App.css'
import './CardList.css'
import Card from './../card/card'
const CardList = ({users}) =>{
 return(
  <div className='card-list'  >
  {users.map((user) => (
    <Card user={user} key={user.id}/>
  ))}
  </div>
 );
};
export default CardList;