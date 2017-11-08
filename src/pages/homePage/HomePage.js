import React from 'react';

const HomePage = (props) => {
  return(
    <div className='center-block'>
      <form >
        <input type="text"
               name='owner'
               placeholder='User or organization name'
               //onChange={props}
        />
        <button type='submit'
                //onClick={props}
        >Search</button>
      </form>
    </div>
  )
};

export default HomePage;