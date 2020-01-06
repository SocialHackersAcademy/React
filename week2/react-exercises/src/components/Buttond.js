import React from 'react';

const Buttond = (props) => {

  return (
   <>
    <button type="submit" onClick={props.clickHandler}>
      Get a dog!
    </button>
   </>
  );
}

export default Buttond;
