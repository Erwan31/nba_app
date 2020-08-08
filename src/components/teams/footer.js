import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <header>
            <div className="container">
                <div className="container">
                    <div className="three columns">
                        <Link to="/" className="logo">
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Footer;