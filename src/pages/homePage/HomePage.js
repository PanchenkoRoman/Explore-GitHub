import React from 'react';

const HomePage = ({ onCahgeHandle, getRepos }) => {
  return(
    <div className='center-block'>
      <form >
        <input type="text"
               name='owner'
               placeholder='User or organization name'
               onChange={ (event) => onCahgeHandle(event) }
        />
        <button type='submit'
                onClick={ (event) => getRepos(event) }
        >Search</button>
      </form>
    </div>
  )
};

export default HomePage;