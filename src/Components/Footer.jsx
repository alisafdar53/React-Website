import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Components/Button'
import "../css/Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    <span>V</span>acation
                    <span> D</span>eals
                </p>

                <p className="footer-subscription-text">
                    What are You waiting for?
                    <br></br><span>Go </span>
                    <span>On</span>
                </p>

                <div className="input-areas">
                    <form >

                        <input type="text" name="name" placeholder="Your Name" className="footer-input" />

                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />

                        <Button className="btns"
                            buttonStyle="btn--outline">Subscribe</Button>

                    </form>
                </div>
            </section>



            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <span>S</span>tark<i className="fab fa-typo3" /></Link>
                    </div>
                </div>
                <small className="website-rights">&#169; Copyright Ali
                    Safdar 2021.</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                        to='/'
                        target="_blank"
                        aria-label='Facebook'>
                        <i className="fab fa-facebook-f" />
                    </Link>

                    <Link className="social-icon-link instagram"
                        to='/'
                        target="_blank"
                        aria-label='Instagram'>
                        <i className="fab fa-istagram" />
                    </Link>

                    <Link className="social-icon-link twitter"
                        to='/'
                        target="_blank"
                        aria-label='Twitter'>
                        <i className="fab fa-twitter" />
                    </Link>

                    <Link className="social-icon-link linkedin"
                        to='/'
                        target="_blank"
                        aria-label='LinkedIn'>
                        <i className="fab fa-linkedin" />
                    </Link>

                </div>
            </section>
        </div>


    )
}

export default Footer
