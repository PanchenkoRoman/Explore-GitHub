import React from 'react';

const Arrows = (param) =>{
  return(
    <span>
        {
          param
            ? <i className="fa fa-chevron-down" />
            : <i className="fa fa-chevron-up" />
        }
        </span>
  )
};
 export default Arrows;