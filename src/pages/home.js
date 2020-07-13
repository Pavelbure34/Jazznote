import React from 'react';
import {Home_Album as Album} from '../assets/images';
import {DynamicTransition} from '../hooks';
import {Navigation, Footer} from '../components';
import {Sample_Album, Sample_Arist} from '../assets/images';

const Home = ()=>{
    const SRC = DynamicTransition(Album);
    let today = new Date();

    return (
        <div id="home">
           <header>
               <Navigation/>
                <section id="header-content">
                    <h1>Jazz Note</h1>
                    <sub>Music and Review</sub>
                </section>
           </header>
           <section className="main-content">
                <div id="album-of-this-month" className="main-content-body">
                    <img src={Sample_Album} className="main-content-body-image" alt="album"/>
                    <div className="main-content-body-text">
                        <div>
                            <sub>{today.getMonth() + 1}. {today.getFullYear()}</sub>
                            <h2>We Get Requests</h2>
                        </div>
                        
                        <p className="album-of-this-month-artist-name">
                            Recorded by<br/>
                            the Oscar Peterson Trio
                        </p>
                        <img src={Sample_Arist} className="album-of-this-month-artist-image" alt="artist"/>
                    </div>
               </div>
               <hr/>
                <div id="about-this-blog" className="main-content-body">
                    <img src={SRC} className="main-content-body-image" alt="album"/>
                    <div className="main-content-body-text">
                        <h2>About this Blog</h2>
                        <p>
                            I post reviews of Jazz albums of my choice.
                            I am Dongbin Alistaire Suh, a software engineer, Jazz enthusiast, and amateur Jazz pianist.
                            You can find my previous reviews in "Monthly Album Review" link above.
                        </p>
                    </div>
               </div>
           </section>
           <footer>
                <Footer/>
           </footer>
        </div>
    );
};

export {Home};
