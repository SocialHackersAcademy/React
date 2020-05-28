import React from "react";
import SelectedFriend from "./../selectedFriend";
import "./styles.css";

function FriendsList(props) {
  return (
    <ul>
      {props.data.map((person, index) => {
        return (
          <li>
            <SelectedFriend data={person} key={index} />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendsList;
