import React from 'react';
import './Header.css';
import logo from '../../assets/logo-kasa.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo-kasa" />
                    </Link>
                    <Link to="/" className="menu">
                        Acceuil
                    </Link>
                    <Link to="/about" className="menu">
                        A propos
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;
