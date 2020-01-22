import React from 'react';
import Buttond from './Buttond';
import DogPhoto from './DogPhoto';
import Axios from 'axios';

const DogGallery = (props) => {
  const [dogPhotos, setDogPhotos] = React.useState([]);
  const getDogPhoto = (e) => {
    Axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        setDogPhotos([...dogPhotos, res.data.message]);
        console.log(`Number of dog photos: ${dogPhotos.length}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div class="GalleryD">
    <Buttond clickHandler={getDogPhoto} />
    <br />
    {(dogPhotos.length > 0 ? (
      [dogPhotos.map((pl, index) => {return <DogPhoto imgSrc={pl} />})

      ]
    ) : (<h1>Get your first dog by clicking the button!</h1>)
    )}
    </div>
  );
}

export default DogGallery;
