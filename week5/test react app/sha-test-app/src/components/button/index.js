import React, { useState } from "react";
import FriendsList from "./../friendsList";

function Button() {
  const [fetchedData, setfetchedData] = useState([]);

  function fetchData() {
    fetch("https://www.randomuser.me/api?results=5")
      .then((res) => res.json())
      .then((data) => {
        setfetchedData(data.results);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <button onClick={fetchData}> Bring me new friends!</button>
      {fetchedData.length > 1 && <FriendsList data={fetchedData} />}
    </div>
  );
}

export default Button;
