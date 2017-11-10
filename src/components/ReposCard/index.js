import React from 'react';
import getDate from '../../utils/getDate'

const ReposCard = ({repos}) => {
  const { name, language, pushed_at, stargazers_count } = repos;
  return(
    <div className='card'>
      <h3>{name}</h3>
      <p>{language}</p>
      <p><i className="fa fa-star-o" aria-hidden="true"> </i>{stargazers_count}</p>
      <p><i className="fa fa-refresh" aria-hidden="true"> </i>{` Pushed at ${getDate(pushed_at)}`}</p>
    </div>
  )
}

export default ReposCard;