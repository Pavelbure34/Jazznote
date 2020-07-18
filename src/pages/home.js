import React from 'react';
import {PopularReviews} from '../data';
import {RenderMonth} from '../funcs';
import {Navigation, Footer, Card, Mainlogo} from '../components';
import {Jumbotron} from 'react-bootstrap';
import {Sample_Album, Sample_Arist} from '../assets/images';
import {SpinningTurnTable as Turntable} from '../assets/video';

const Home = ()=>{
    let today = new Date();

    const renderReviews = (reviews)=>{
        return reviews.map(review=>{
            const {
                id, album, artist, month,
                year, link, image
            } = review;
            return (
                <Card
                    key={id} image={image}
                    album={album} artist={artist}
                    month={month} year={year}
                    link={link}
                />
            )
        });
    };

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
                        image={Sample_Album}
                        album={"We Get Requests"} artist={"Oscar Peterson"}
                        month={today.getMonth() + 1} year={2020}
                        link={''} size="fluid"
                    />
               </div>
               <br/>
                <h3 className="center-text">Popular Reviews</h3>
                <br/>
                <div id="reviews-previous-reviews">
                    {renderReviews(PopularReviews)}
                </div>
           </section>
           <footer>
                <hr/>
                <Footer/>
           </footer>
        </div>
    );
};

export {Home};
