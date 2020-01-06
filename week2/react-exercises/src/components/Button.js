import React from 'react';

const Button = (props) => {

  return (
   <>
    <button type="submit" onClick={props.clickHandler}>
      Get a friend!
    </button>
   </>
  );
}

export default Button;
