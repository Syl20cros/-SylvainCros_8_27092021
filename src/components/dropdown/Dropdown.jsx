import React from 'react';
import './Dropdown.css';
import arrowDown from '../../assets/arrowDown.svg';
import arrowUp from '../../assets/arrowUp.svg';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { open: false }; //Status par defaut (fermé)
    }

    handleClick() {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }

    render() {
        const arrowDirection = this.state.open ? arrowUp : arrowDown; //direction des fleches en fonction du status ouvert ou ferné
        return (
            <section className="dropdown" onClick={this.handleClick}>
                <div className="titleBar">
                    <h2>{this.props.title}</h2>
                    <img src={arrowDirection} alt="icon" />
                </div>
                <p style={{ display: this.state.open ? 'block' : 'none' }}>{this.props.text}</p>
            </section>
        );
    }
}

export default Dropdown;
