import React from 'react';

import SearchBar from '../../components/search-bar/search-bar.js';

import './repositories.css';

class Repositories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = () => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div className="repositories">
        <div className="searchBarWrapper">
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Repositories;
