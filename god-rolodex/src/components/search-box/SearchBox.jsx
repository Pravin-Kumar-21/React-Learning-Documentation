import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box-container">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
          onChange={this.props.onchangeHandler}
          type="search"
        />
      </div>
    );
  }
}

export default SearchBox;
