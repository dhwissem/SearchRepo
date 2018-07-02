import React from 'react';

import RepositoryCard from '../repository-card/repository-card.js';

import './repositories-list.css';

const RepositoriesList = props => {
  return (
    <div className="repositoriesList">
      {props.reposList.map(item => {
        return (
          <div className="repositoryItem" key={item.id}>
            <RepositoryCard repositoryData={item} />
          </div>
        );
      })}
    </div>
  );
};

export default RepositoriesList;
