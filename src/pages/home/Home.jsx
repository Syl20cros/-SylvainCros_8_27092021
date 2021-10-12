import React from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner';
import ImgBannerHome from '../../assets/banner-home.png';
import Thumb from '../../components/thumb/Thumb';
import logements from '../../datas/logements.json';

class Home extends React.Component {
    render() {
        return (
            <main>
                <Banner picture={ImgBannerHome} slogan="Chez vous, partout et ailleurs" />
                <section className="gallery">
                    {logements.map((item) => (
                        <Thumb key={item.id} id={item.id} cover={item.cover} title={item.title} />
                    ))}
                </section>
            </main>
        );
    }
}

export default Home;
