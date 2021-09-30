import React from 'react';
import './Thumb.css';
import { Link } from 'react-router-dom';

class Thumb extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.push('/rent/' + this.props.notice.id);
    }
    render() {
        return (
            <section className="block">
                <Link to={`${this.props.id}`} className="thumb">
                    {this.props.cover !== '' && <img src={this.props.cover} alt="cover" />}
                    <p>{this.props.title}</p>
                </Link>
            </section>
        );
    }
}

export default Thumb;
