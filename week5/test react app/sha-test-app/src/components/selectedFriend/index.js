import React, { useState } from "react";
import "./styles.css";
import FriendDetails from "./../FriendDetails";

function SelectedFriend(props) {
  let [hidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden((hidden = !hidden));
  }

  return (
    <div className="listItem">
      <p>
        {props.data.name.first} {props.data.name.last}{" "}
      </p>
      <p>{props.data.cell}</p>
      <p>{props.data.email}</p>
      <button onClick={toggleHidden}>Show more</button>
      {hidden === false && <FriendDetails data={props.data} />}
    </div>
  );
}

export default SelectedFriend;
