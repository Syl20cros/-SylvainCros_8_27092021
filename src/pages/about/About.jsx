import React from 'react';
// import './About.css';
import Banner from '../../components/banner/Banner';
import ImgBannerAbout from '../../assets/banner-about.png';

class About extends React.Component {
    render() {
        return (
            <main>
                <Banner picture={ImgBannerAbout} />
                <div>Page About</div>
            </main>
        );
    }
}

export default About;
