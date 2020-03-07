import React from 'react';

const Repo = (props) => {
  return (
    <div>
      <a href={props.repo.repoURL}>{props.repo.repoName}</a>
    </div>
    );
}

export default Repo;