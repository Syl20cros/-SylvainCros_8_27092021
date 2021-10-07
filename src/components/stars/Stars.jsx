import React from 'react';
import './Stars.css';
import { ReactComponent as StarIcon } from '../../assets/star.svg';

class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.starTable = [1, 2, 3, 4, 5];
    }

    render() {
        return (
            <div className="stars">
                {this.starTable.map((starStatus, index) => (
                    <StarIcon
                        key={index}
                        className={this.props.value >= starStatus ? 'icon-fill' : 'icon-empty'}
                    />
                ))}
            </div>
        );
    }
}

export default Stars;
