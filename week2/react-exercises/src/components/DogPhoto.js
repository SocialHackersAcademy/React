import React from 'react';

const DogPhoto = (props) => {

  return (
   <>
    <img src={props.imgSrc} class='dogPhoto' />
   </>
  );
}

export default DogPhoto;
