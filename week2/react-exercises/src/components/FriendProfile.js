import React from 'react';

const FriendProfile = (props) => {


  return (
   [Object.keys(props.fr).length !== 0 ? (
     <>
      <ul>
      <li>Name: {props.fr.name}</li>
      <li>Address: {props.fr.address}</li>
      <li>Email: {props.fr.email}</li>
      <li>Phone: {props.fr.phone}</li>
      </ul>
     </>
    ) : (
      <><h1>Click to get a friend</h1></>
    )]
  );
}

export default FriendProfile;
