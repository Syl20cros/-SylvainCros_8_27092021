import React from 'react';
import './Thumb.css';
import { Link } from 'react-router-dom';

class Thumb extends React.Component {
    render() {
        return (
            <Link to={`/lodgement/${this.props.id}`} className="thumb">
                <figure className="block">
                    {this.props.cover !== '' && <img src={this.props.cover} alt="cover" />}
                    <figcaption className="blockName">{this.props.title}</figcaption>
                </figure>
            </Link>
        );
    }
}

export default Thumb;
