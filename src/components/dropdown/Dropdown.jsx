import React from 'react';
import './Dropdown.css';
import arrowDown from '../../assets/arrowDown.svg';
import arrowUp from '../../assets/arrowUp.svg';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { open: false };
    }

    handleClick() {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }

    render() {
        const arrowPath = this.state.open ? arrowUp : arrowDown;
        console.log(arrowPath);
        return (
            <section className="dropdown" onClick={this.handleClick}>
                <div className="titleBar">
                    <h2>{this.props.title}</h2>
                    {/* <i className="fas fa-chevron-up"></i> */}
                    <img src={arrowPath} alt="icon" />
                </div>
                <p>{this.props.text}</p>
            </section>
        );
    }
}

export default Dropdown;
