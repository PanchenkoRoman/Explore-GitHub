import React from 'react';

const UserInfo = ({user}) => {
  console.log(user);
  const { avatar_url, name, location, bio } = user;
  return(
    <div className='center-block'>
      <img className='avatar' src={avatar_url} alt="avatar"/>
      <h3 className='title-white'>{name}</h3>
      <div>
        <i className="title-white fa fa-map-marker"> </i>
        <span className='title-white'>{`  ${location}`}</span>
        <p className='title-white'>{bio}</p>
      </div>
    </div>
  )
}

export default UserInfo;