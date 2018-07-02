import React from 'react';

import Link from '../link/link.js';

import Star from '../../assets/star.svg';
import Fork from '../../assets/fork.svg';

import './repository-card.css';

const RepositoryCard = ({ repositoryData }) => {
  const LinkToContributors = `contributors/${repositoryData.full_name}`;
  return (
    <div className="repositoryCard">
      <div className="repositoryName">
        <Link isExternal url={repositoryData.html_url}>
          {repositoryData.name}
        </Link>
      </div>
      <div className="repositoryLanguage">{repositoryData.language}</div>
      <div className="repositoryDescription">{repositoryData.description}</div>
      <div className="topContributors">
        <Link url={LinkToContributors}>Top contributors</Link>
      </div>
      <div className="repositoryStats">
        <div className="stars">
          <img src={Star} alt="stars" />
          <span>{repositoryData.watchers_count}</span>
        </div>
        <div className="forks">
          <img src={Fork} alt="forks" />
          <span>{repositoryData.forks_count}</span>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
