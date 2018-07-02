import React from 'react';

const RepositoriesList = props => {
  return (
    <div className="RepositoriesList">
      {props.reposList.map(item => {
        return (
          <div key={item.id} data={item}>
            Card{' '}
          </div>
        );
      })}
    </div>
  );
};

export default RepositoriesList;
