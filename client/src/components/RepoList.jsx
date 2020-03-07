import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List </h4>
    There are {props.repos.length} repos.
    <div>
      {props.repos.map((repo) => {
        return <Repo repo={repo} key={repo._id}/>
      })}
    </div>
  </div>
)

export default RepoList;