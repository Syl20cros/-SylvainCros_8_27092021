import React from 'react';
import './Carousel.css';
import nextArrow from '../../assets/nextArrow.svg';
import previousArrow from '../../assets/previousArrow.svg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };
    }

    handleClick = (e) => {
        const id = e.target.id === 'previousArrow' ? -1 : 1;
        this.setState((value) => {
            let result = value.index;
            if (result + id >= this.props.pictures.length) {
                result = 0;
            } else if (result + id < 0) {
                result = this.props.pictures.length - 1;
            } else {
                result += id;
            }
            return { index: result };
        });
    };

    render() {
        return (
            <div className="carousel">
                <img
                    className="carouselImg"
                    src={this.props.pictures[this.state.index]}
                    alt="cover"
                />
                {this.props.pictures.length !== 1 && ( //condition de presence de plusieurs images
                    <img
                        className="carouselPrev"
                        id={'previousArrow'}
                        src={previousArrow}
                        onClick={this.handleClick}
                        alt="previous_arrow"
                    />
                )}

                <div className="carouselValue">
                    {this.state.index + 1}/{this.props.pictures.length}
                </div>
                {this.props.pictures.length !== 1 && ( //condition de presence de plusieurs images
                    <img
                        className="carouselNext"
                        id={'nextArrow'}
                        src={nextArrow}
                        onClick={this.handleClick}
                        alt="next_arrow"
                    />
                )}
            </div>
        );
    }
}

export default Carousel;
