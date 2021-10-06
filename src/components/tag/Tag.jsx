import React from 'react';
import './Tag.css';

class Tag extends React.Component {
    render() {
        return <div className="tags">{this.props.text}</div>;
    }
}

export default Tag;
