import React from "react";
import imgGH from '../../img/GitHub/GitHub-Mark-120px-plus.png';
import imgLI from '../../img/LinkedIn/LI-In-Bug.png';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <h2>Contacto</h2>
            <div className="links">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/tomaslm3">
                    <img src={imgGH} alt='img not found'/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tomaslopezmancina-fullstack/">
                    <img src={imgLI} alt="img not found"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;