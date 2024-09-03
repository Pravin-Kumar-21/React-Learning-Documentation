import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({onchangeHandler, className,
placeholder}) => {
    return (
      <div className="search-box-container">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input
          className={`search-box ${className}`}
          placeholder={placeholder}
          onChange={onchangeHandler}
          type="search"
        />
      </div>
    );
  }

export default SearchBox;
