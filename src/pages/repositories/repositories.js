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

  componentDidMount() {
    this.props.match.params.query &&
      this.getResults(this.props.match.params.query);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.match.params.query
      ? nextProps.match.params.query !== this.props.match.params.query &&
        this.getResults(nextProps.match.params.query)
      : this.setState({ reposList: [] });
  }

  getResults = query => {
    API.getRepos(query, 1, 6).then(data => {
      data && this.setState({ reposList: data });
    });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = () => {
    const { value } = this.state;
    const { history } = this.props;
    value && history.push(`/search/${value}`);
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
