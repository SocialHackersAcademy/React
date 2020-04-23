import React, { useState } from 'react';


function Counter() {
    let [count, setCount] = useState(0)
    let feedback = (count > 10) ? "It's higher than 10!" : "Keep Counting.."

    return (
        <div>
            <Count count={count} />
            <p>{feedback}</p>
            <Button onClick={() => setCount(count + 1)} />
        </div>
    )
}

function Count(props) {
    return (
        <h3> Current Count : {props.count}</h3>
    )
}

function Button(props) {



    return (
        <button onClick={props.onClick}> Add 1 !</button>
    )
}


export default Counter;