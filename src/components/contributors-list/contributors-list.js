import React from 'react';

import ContributorCard from '../contributor-card/contributor-card.js';

import './contributors-list.css';

const ContributorsList = ({ contributorsList }) => {
  return (
    <div className="contributorsList">
      {contributorsList.map(contributor => (
        <ContributorCard key={contributor.id} contributor={contributor} />
      ))}
    </div>
  );
};

export default ContributorsList;
