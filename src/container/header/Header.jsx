import React from 'react'
import './header.css';
import people from '../../Assets/assets/people.png'
import ArtIn from '../../Assets/assets/ai.png';
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id='home'>
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something Amazing from Gpt-3 OpenAI
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis suscipit, atque optio cupiditate assumenda odio? Tempore iusto, voluptas molestias, quidem odit ab nostrum fugiat, recusandae voluptatum totam nihil quod quos vero architecto exercitationem qui fuga.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" name="" id="" placeholder=' Please enter Your gmail ' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>more than 12k person visits here in 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ArtIn} alt="aiImage" />
            </div>
        </div>
    )
}

export default Header