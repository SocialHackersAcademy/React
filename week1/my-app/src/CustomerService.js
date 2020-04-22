import React, { useState } from 'react';


const content = [
    { src: './../../assets/exercises/f-delivery.png', title: 'Free Shipping', description: 'This is a random description' },
    { src: './../../assets/exercises/coin.png', title: '100% Money Back', description: 'This is a random description' },
    { src: './../../assets/exercises/chat.png', title: 'Online Support 24/7', description: 'This is a random description' },

];


function Guarantee(props) {
    const [services, setService] = useState(content)

    return (
        <div className="services">{services.map(item => {
            return (
                <div>
                    <img src={item.src} />
                    <h2>{item.title}</h2>
                    <h5>{item.description}</h5>
                </div>
            )
        })}</div>
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