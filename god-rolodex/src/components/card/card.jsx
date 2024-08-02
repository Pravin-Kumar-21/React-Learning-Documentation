import { Component } from "react";
import './card.css'
class Card extends Component{
render()
{
    const {name , id , email} = this.props.objects;
    return(
        <div className='card-container' key={id}>
            <img alt={`user: ${name}`} src={`https://robohash.org/${id}?set=set3&size=200x200`}/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>  
        )

}
};
export default Card;