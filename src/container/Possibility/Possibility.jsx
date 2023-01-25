import React from 'react'
import './possibility.css';
import PossibilityImage from '../../Assets/assets/possibility.png'
const Possibility = () => {
  return (
    <div className="gpt3__possibility" id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="PossibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early acess to get Started</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, vel. Sunt atque consequuntur rerum. Vero blanditiis nam voluptatum! A magnam ipsam laboriosam expedita sapiente?
        </p>
        <h4>Request early acess to get started.</h4>
      </div>
    </div>
  )
}

export default Possibility