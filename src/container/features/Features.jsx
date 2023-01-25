import React from 'react';
import { Feature } from '../../component';
import './features.css';
const featuresData = [
    {
        title: 'Improving end distrust instantly.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi, tempore tenetur facilis consequatur nostrum',

    },

    {
        title: 'Become the tended active.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi, tempore tenetur facilis consequatur nostrum',

    },
    {
        title: 'Message or an nothing.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi, tempore tenetur facilis consequatur nostrum',

    },
    {
        title: 'Really boy law county.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi, tempore tenetur facilis consequatur nostrum',

    },
];
const Features = () => {
    return (
        <div className="gpt3__fautures section__padding" id='features'>
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The future is now and you just need to relize it. sleep into future today & make it happen.
                </h1>
                <p>Request Early acess to get started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((items) => {
                    return <Feature title={items.title} text={items.text} />
                })}
            </div>
        </div>
    )
}

export default Features