import React from 'react'
import { Component } from 'react'
class SearchBox extends Component{
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          placeholder={this.props.placeholder}
          onChange={this.props.onchangeHandler}
          type="search"
        />
      </div>
    )
  }
}

export default SearchBox