import React, { useState, useEffect } from 'react';

function RandomJoke() {
    let [joke, setJoke] = useState({})

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => { setJoke(data) })
    }, [])






    return (
        <Joke joke={joke} />
    )
}

function Joke(props) {

    return (
        <div>
            <h2>Random Joke Generator</h2>
            <p>{props.joke.setup}</p>
            <p>{props.joke.punchline}</p>
        </div>
    )
}


export default RandomJoke;