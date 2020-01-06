import React from 'react';
import Joke from './Joke';
import axios from 'axios';

function RandomJoke() {
      const [joke, setJoke] = React.useState({});
      React.useEffect(async () => {
         axios.get(`https://official-joke-api.appspot.com/random_joke`)
        .then(promise => {
           setJoke(promise.data);
         })
        .catch(e => {
           console.error(e);
         })
      }, []);
      return (
        <div class="RandomJ">
            <Joke stText={joke['setup']} pnText={joke['punchline']} />
        </div>
      );
}

export default RandomJoke;
