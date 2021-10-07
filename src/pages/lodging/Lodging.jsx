import { Redirect } from 'react-router';
import React from 'react';
import './Lodging.css';
import Dropdown from '../../components/dropdown/Dropdown';
import Tag from '../../components/tag/Tag';
import Stars from '../../components/stars/Stars';
import Carousel from '../../components/carousel/Carousel';
const logements = require('../../datas/logements.json');

class Lodging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            logement: null
        };
    }

    componentDidMount() {
        this.recherche();
    }

    recherche() {
        //declarer variable pour logement
        this.setState({
            logement: logements.find((logement) => logement.id === this.props.match.params.id),
            isLoading: false
        });
    }

    render() {
        let template = this.state.isLoading ? (
            <div>Chargement en cours</div>
        ) : this.state.logement ? (
            <main>
                <Carousel pictures={this.state.logement.pictures} />

                <section className="infoLodgment">
                    <div className="infos">
                        <h2 className="infoLodgmentTitle">{this.state.logement.title}</h2>
                        <p className="location">{this.state.logement.location}</p>
                        <div className="tags">
                            {this.state.logement.tags.map((item, index) => (
                                <Tag key={index} text={item} />
                            ))}
                        </div>
                    </div>

                    <div className="host">
                        <Stars value={this.state.logement.rating} />
                        <figure>
                            <img
                                className="hostPicture"
                                src={this.state.logement.host.picture}
                                alt="host_picture"></img>
                            <figcaption className="hostName">
                                {this.state.logement.host.name.split(' ')[0]}
                                <br />
                                {this.state.logement.host.name.split(' ')[1]}
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section className="dropDowns">
                    <Dropdown title="Description" text={this.state.logement.description} />
                    <Dropdown
                        title="Equipements"
                        text={this.state.logement.equipments.join('\n')}
                    />
                </section>
            </main>
        ) : (
            this.state.logement === undefined && <Redirect to="/error" />
        );
        return template;
    }
}

export default Lodging;
