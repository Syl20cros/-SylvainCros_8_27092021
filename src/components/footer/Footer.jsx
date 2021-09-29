import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-kasa.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <img src={logo} alt="logo-kasa" />
                <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;
