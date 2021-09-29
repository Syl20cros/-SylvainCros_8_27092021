import React from 'react';
// import './Home.css';
import Banner from '../../components/banner/Banner';
import ImgBannerHome from '../../assets/banner-home.png';

class Home extends React.Component {
    render() {
        return (
            <main>
                <Banner picture={ImgBannerHome} slogan="Chez vous, partout et ailleurs" />
            </main>
        );
    }
}

export default Home;
