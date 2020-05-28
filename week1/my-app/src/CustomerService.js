import React, { useState } from 'react';
import deliveryLogo from "./assets/exercises/f-delivery.png"
import coinLogo from "./assets/exercises/coin.png"
import chatLogo from "./assets/exercises/chat.png"




const content = [
    { src: deliveryLogo, title: 'Free Shipping', description: 'Ta stelnoume me gaidouri' },
    { src: coinLogo, title: '100% Money Back', description: 'Xrwstame kai ths Mixalous' },
    { src: chatLogo, title: 'Online Support 24/7', description: 'Tha sas kanoume anapanthth na mhn xrewthoume' },

];


function Guarantee(props) {
    const [services, setService] = useState(content)

    return (
        <div className="services">{services.map((item, index) => {
            return (
                <Component key={index} src={item.src} title={item.title} description={item.description} />
            )
        })}</div>
    )
}

function Component(props) {
    return (
        <div>
            <img src={props.src} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}



function CustomerService() {
    return (
        <div>
            <Guarantee />
        </div>
    )
}



export default Guarantee;