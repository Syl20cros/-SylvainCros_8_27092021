import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    render() {
        return (
            <figure className="banner">
                <img src={this.props.picture} alt="Banner" />
                <figcaption>{this.props.slogan}</figcaption>
            </figure>
        );
    }
}

export default Banner;
