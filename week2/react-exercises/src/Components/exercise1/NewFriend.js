import React, { useState, useEffect } from 'react';

function Friend() {
    const [friend, setFriend] = useState({})

    let getFriend = useEffect(() => {
        fetch("https://www.randomuser.me/api?results=1")
            .then(response => response.json())
            .then(data => setFriend(data))
    }
        , [])



    return (
        <div>
            <Button getFriend={getFriend} />
            <FriendProfile friend={friend} />
        </div>)
}

function FriendProfile(props) {

    const friendData = JSON.stringify(props.friend.results[0].gender)
    console.log('friend data is', friendData)
    return (
        <ul>
            <h3>Friend Profile</h3>
            <h5>Full Name :</h5>
            <h5>Address : </h5>
            <h5>Country : </h5>
            <h5>Email : </h5>
            <h5>Phone Number : </h5>
        </ul>
    )
}

function Button(props) {
    return (
        <button onClick={props.getFriend}>Get A Friend!</button>
    )
}


export default Friend;