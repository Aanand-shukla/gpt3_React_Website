import React from 'react'
import './footer.css';
import gpt3Logo from '../../Assets/assets/logo.svg'
const Footer = () => {
    return (
        <div className="gpt3__footer">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step into the future before others.
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Acess</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="" />
                    <p> All rights are  reserverd to this company.</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counter</p>
                    <p>contacts</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms and Condition</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>

                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in Touch</h4>
                    <p>Crechterwoord k12 182 DK alknjkcb</p>
                    <p>+8704532672</p>
                    <p>xyz@mail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-authors">
                <div className="gpt3__footer_authors-name">
                    <h3>Author:</h3>
                    <p>Aanand Shukla</p>
                </div>
                <div className="gpt3__footer_authors-rights">
                    <h3>All rights are reserved copyright &copy; Gpt3-chatboat</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer