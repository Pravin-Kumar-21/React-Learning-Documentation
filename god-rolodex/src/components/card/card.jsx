import { Component } from "react";
import './card.css'
const Card = ({user}) => {
    // console.log(user);
    const {id,name,email} = user
    return(
        <div className='card-container' key={id}>
            <img alt={`user: ${name}`} src={`https://robohash.org/${id}?set=set3&size=200x200`}/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>  
        );

}
export default Card;