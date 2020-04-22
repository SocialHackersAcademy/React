import React, { useState } from 'react';


const content = [
    { src: './../../assets/exercises/f-delivery.png', title: 'Free Shipping', description: 'Ta stelnoume me gaidouri' },
    { src: './../../assets/exercises/coin.png', title: '100% Money Back', description: 'Xrwstame kai ths Mixalous' },
    { src: '../../assets/exercises/chat.png', title: 'Online Support 24/7', description: 'Tha sas kanoume anapanthth na mhn xrewthoume' },

];


function Guarantee(props) {
    const [services, setService] = useState(content)

    return (
        <div className="services">{services.map(item => {
            return (
                <Component src={item.src} title={item.title} description={item.description} />
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



export default CustomerService;