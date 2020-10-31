import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3>Edyoda</h3>
                <p>About us</p>
                <p>Contact us</p>
                <p>Terms of use</p>
                <p>privacy policy</p>
            </div>
            <div>
                <h3>resources</h3>
                <p>courses</p>
                <p>learning videos</p>
                <p>edyoda stories</p>
                <p>university</p>
            </div>
            <div>
                <h3>for enterprises</h3>
                <p>hire edyoda graduates</p>
                <h3>quick links</h3>
                <p>learn and earn</p>
                <p>become a learning enabler</p>
                <p>Tips for Learning-Enabler</p>
                <p>request new topics</p>
            </div>
            <div>
                <h3>connect</h3>
                <p>2nd Floor #188, Survey No. - 123/1, Incubes Building Next to McDonalds, ITPL Main Rd, Brookefield, Bengaluru, Karnataka-560037, India</p>
                <h6><i className="fa fa-envelope" aria-hidden="true"></i> hello@edyoda.com</h6>
                <h6> <i className="fa fa-phone" aria-hidden="true"></i> +91 8971554184</h6>
                <div className={styles.icons}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </div>                
            </div>
        </div>
    )
}

export default Footer
