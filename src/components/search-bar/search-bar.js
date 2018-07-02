import React from 'react';

import './search-bar.css';

const SearchBar = props => {
  const handleChange = event => {
    props.handleChange(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleSubmit();
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Search Github"
        onChange={handleChange}
        className="input text"
      />
      <button type="submit" className="submitBtn" onClick={handleSubmit}>
        Go!
      </button>
    </form>
  );
};

export default SearchBar;
