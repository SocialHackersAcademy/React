import React from "react";
import "./styles.css";

function FriendDetails(props) {
  console.log("this props are ", props);

  return (
    <div>
      <img src={props.data.picture.medium} />
      <p>Age : {props.data.dob.age}</p>
      <p>
        {props.data.location.city}, {props.data.location.country}
      </p>
    </div>
  );
}

export default FriendDetails;
