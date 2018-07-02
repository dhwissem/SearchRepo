import React from 'react';

import SearchBar from '../../components/search-bar/search-bar.js';
import RepositoriesList from '../../components/repositories-list/repositories-list.js';

import API from '../../utils/api.js';

import './repositories.css';

class Repositories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      reposList: []
    };
  }

  getResults = () => {
    API.getRepos(this.state.value, 1, 6).then(data => {
      data && this.setState({ reposList: data });
    });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = () => {
    !!this.state.value && this.getResults();
  };

  render() {
    const { reposList } = this.state;
    return (
      <div className="repositories">
        <div className="searchBarWrapper">
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        {!!reposList.length && (
          <div className="repositoriesListWrapper">
            <RepositoriesList reposList={reposList} />
          </div>
        )}
      </div>
    );
  }
}

export default Repositories;
