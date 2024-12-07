import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = () => {
  return (
    <div className="s-wrapper">
      <input
        className="s-input"
        type="text"
        placeholder="O que você procura?"
      />
      <FontAwesomeIcon icon={faSearch} id="s-logo" />
    </div>
  );
};
