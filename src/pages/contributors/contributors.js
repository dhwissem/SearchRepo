import React from 'react';

import ContributorsList from '../../components/contributors-list/contributors-list.js';
import Link from '../../components/link/link.js';

import API from '../../utils/api.js';

import './contributors.css';

class Contributors extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contributorsList: []
    };
  }

  componentDidMount() {
    const { owner, repository } = this.props.match.params;
    API.getContributors(owner, repository, 1, 10).then(data =>
      this.setState({
        contributorsList: data
      })
    );
  }

  handleLoadMore = () => {
    const { owner, repository } = this.props.match.params;
    const { contributorsList } = this.state;
    const pageSize = 5;
    const nextPage = contributorsList.length / pageSize + 1;
    nextPage > 2 &&
      API.getContributors(owner, repository, nextPage, pageSize).then(data => {
        this.setState({
          contributorsList: contributorsList.concat(data)
        });
      });
  };

  render() {
    const { contributorsList } = this.state;
    const { params } = this.props.match;

    return (
      <div className="contributorsPage">
        <div className="contributorsPageTitle">
          Top 10 contributors for repository "{params.repository}"
        </div>
        <div className="searchAgain">
          <Link url="/">Search again</Link>
        </div>
        {!!contributorsList && (
          <div className="contributorsPageContent">
            <ContributorsList contributorsList={contributorsList} />
            <button
              className="loadMoreBtn"
              type="button"
              onClick={this.handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Contributors;
