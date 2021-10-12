import React from 'react';
import './About.css';
import Banner from '../../components/banner/Banner';
import ImgBannerAbout from '../../assets/banner-about.png';
import Dropdown from '../../components/dropdown/Dropdown';
import AboutContent from '../../datas/aboutContent.json';

class About extends React.Component {
    render() {
        return (
            <main>
                <Banner picture={ImgBannerAbout} />
                <section className="dropdowns">
                    {AboutContent.map((item, index) => (
                        <Dropdown key={index} title={item.title} text={item.text} />
                    ))}
                </section>
            </main>
        );
    }
}

export default About;
