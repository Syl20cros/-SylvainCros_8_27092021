import React from 'react';
import './Thumb.css';
import { Link } from 'react-router-dom';

class Thumb extends React.Component {
    render() {
        return (
            <section className="block">
                <Link to={`/lodgement/${this.props.id}`} className="thumb">
                    {this.props.cover !== '' && <img src={this.props.cover} alt="cover" />}
                    <p>{this.props.title}</p>
                </Link>
            </section>
        );
    }
}

export default Thumb;
