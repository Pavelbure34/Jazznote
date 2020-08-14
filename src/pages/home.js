import React from 'react';
import {FocusOnTop} from '../hooks';
import {
    Navigation,
    Footer,
    Card,
    Mainlogo,
    PopularReviews
} from '../components';
import {Jumbotron} from 'react-bootstrap';
import {WeGetRequests} from '../assets/images';
import {SpinningTurnTable as Turntable} from '../assets/video';

/*
    home.js : Default page when people visit for the first time
*/

const Home = ()=>{
    let today = new Date();
    FocusOnTop();

    return (
        <div id="home">
           <header>
                <Navigation/>
                <section id="header-content">
                    <Mainlogo/>
                </section>
           </header>
           <section className="main-content">
                <Jumbotron id="about-this-blog" className="main-content-jumbotron">
                    <div className="main-content-jumbotron-text">
                        <h3>About this Blog</h3>
                        <p>
                            I post reviews of Jazz albums of my choice.
                            I am Dongbin Alistaire Suh, a Jazz enthusiast, and amateur Jazz pianist.
                        </p>
                    </div>
                    <video
                        className="video-bg"
                        autoplay="autoplay"
                        muted
                        loop="loop">
                        <source src={Turntable} type="video/mp4"/>
                    </video>
               </Jumbotron>
               <h3 className="center-text">Recent Review</h3>
               <br/>
                <div id="album-of-this-month" className="main-content-body">
                    <Card
                        image={WeGetRequests}
                        album={"We Get Requests"} artist={"Oscar Peterson"}
                        month={today.getMonth() + 1} year={2020}
                        link={'/reviews/wegetrequests'}
                        size="fluid"
                    />
               </div>
               <br/>
               <PopularReviews/>
           </section>
           <footer>
                <Footer/>
           </footer>
        </div>
    );
};

export {Home};
