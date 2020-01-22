import React from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';
import Axios from 'axios';

const Friend = (props) => {
  const [friend, setFriend] = React.useState({});
  const getFriend = (e) => {
    Axios.get(`https://www.randomuser.me/api?results=1`)
      .then(res => {
        const friendP = {
          name: res.data.results[0].name.title+' '+res.data.results[0].name.first+' '+res.data.results[0].name.last,
          address: res.data.results[0].location.street.number+' '+res.data.results[0].location.street.name+', '+res.data.results[0].location.city+', '+res.data.results[0].location.country,
          email: res.data.results[0].email,
          phone: res.data.results[0].phone
        };
        setFriend(friend => friendP);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
   <div class="FriendF">
    <Button clickHandler={getFriend} />
    <br />
    <FriendProfile fr={friend} />
   </div>
  );
}

export default Friend;
