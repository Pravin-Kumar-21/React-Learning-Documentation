import React from 'react'
import { Component } from 'react';
import '../../App.css'
import './CardList.css'
import Card from './../card/card'

class CardList extends Component{
  render(){
    const {users} = this.props
    return(
        <Card objects={users}/>
    )
}
};
export default CardList;