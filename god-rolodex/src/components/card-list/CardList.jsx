import React from 'react'
import App from '../../App';
import '../../App.css';
const CardList = () => {
  return (
    <div className="App">
      <input className='search-box' 
        type='search' 
        placeholder='Search Users' 
        onChange={App.onserchChange} // here removed this.
        />
        <header className="App-header">
          {App.filterUsers.map((g) => {
            return (
            <div  key={g.id}>
              <p>{g.name}</p>
            </div>
          );
          })
          }
        </header>   
      </div>
  )
}

export default CardList;