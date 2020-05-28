import React, { useState, useEffect } from 'react';



function Friend() {
    const [friend, setFriend] = useState("")

    function getFriend() {
        fetch("https://www.randomuser.me/api?results=1")
            .then(response => response.json())
            .then(data => setFriend(data))
    }




    return (
        <div>
            <Button getFriend={getFriend} />
            <FriendProfile friend={friend} />
        </div>)
}

function FriendProfile(props) {



    const friendData = props.friend.results

    console.log("Friend data at this point is", friendData)

    return (
        <ul>
            <h3>Friend Profile</h3>
            <h4>Full Name :{friendData && friendData[0].name.first} {friendData && friendData[0].name.last}</h4>
            <h4>Address : {friendData && friendData[0].location.street.name} {friendData && friendData[0].location.street.number} </h4>
            <h4>Country : {friendData && friendData[0].location.country}</h4>
            <h4>Email : {friendData && friendData[0].email}</h4>
            <h4>Phone Number : {friendData && friendData[0].phone} </h4>
        </ul>
    )
}

function Button(props) {
    return (
        <button onClick={props.getFriend}>Get A Friend!</button>
    )
}


export default Friend;