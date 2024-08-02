import { Component } from "react";
import './card.css'
class Card extends Component{
render()
{
    const {objects} = this.props;
    return(
        <div className='card-list' >
            {objects.map((g) => (
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
export default Card;