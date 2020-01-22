import React from 'react';

const Joke = (props) => {

  return (
   <>
    <p>{props.stText}</p><br />
    <p>{props.pnText}</p>
   </>
  );
}

export default Joke;
