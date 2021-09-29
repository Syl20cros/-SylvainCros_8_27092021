import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

class Erreur extends React.Component {
    render() {
        return (
            <section className="error">
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </section>
        );
    }
}

export default Erreur;
