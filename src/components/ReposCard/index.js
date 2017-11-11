import React from 'react';
import getDate from '../../utils/getDate'

const ReposCard = ({repos}) => {
  const { name, language, pushed_at, html_url, stargazers_count } = repos;
  return(
    <a href={html_url} target='_blank' className='card'>
      <h3>{name}</h3>
      <p>{language}</p>
      <p><i className="fa fa-star-o" aria-hidden="true"> </i>{stargazers_count}</p>
      <p><i className="fa fa-refresh" aria-hidden="true"> </i>{` Pushed at ${getDate(pushed_at)}`}</p>
    </a>
  )
}

export default ReposCard;