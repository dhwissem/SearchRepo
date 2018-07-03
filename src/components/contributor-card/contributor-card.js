import React from 'react';

import Link from '../link/link.js';

import './contributor-card.css';

const ContributorCard = ({ contributor }) => {
  const { html_url, avatar_url, login, contributions } = contributor;

  return (
    <div className="contributorCard">
      <div className="contributorImage">
        <img alt={login} src={avatar_url} />
      </div>
      <Link isExternal url={html_url}>
        {login}
      </Link>
      <span> ({contributions} contributions)</span>
    </div>
  );
};

export default ContributorCard;
