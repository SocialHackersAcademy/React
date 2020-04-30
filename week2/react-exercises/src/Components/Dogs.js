import React, { useState } from 'react';



function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([])

    function getDogPhotos() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDogPhotos([...dogPhotos, data.message])
                console.log(dogPhotos)
            })
    }

    const emptyGallery = dogPhotos.length < 1


    return (
        <div>
            <Button getDogPhotos={getDogPhotos} />
            <br />
            {emptyGallery && <h2>Get your first dog by clicking the button!</h2>}
            {dogPhotos.map((url, index) => {
                return <DogPhoto url={url} key={index} />
            })}

        </div>
    )
}

function DogPhoto(props) {
    return <img style={{ width: 250, height: 250 }} src={props.url}></img>
}

function Button(props) {
    return (
        <button onClick={props.getDogPhotos}>Get A dog</button>
    )
}

export default DogGallery;

