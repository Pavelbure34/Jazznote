import React from 'react';
import {PopularReviews} from '../data';
import {Navigation, Footer, Card} from '../components';
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
                    <h1 className="title">Jazz Note</h1>
                    <sub>Music and Review</sub>
                </section>
           </header>
           <section className="main-content">
                <Jumbotron id="about-this-blog" className="main-content-jumbotron">
                    <div className="main-content-jumbotron-text">
                        <h2>About this Blog</h2>
                        <p>
                            I post reviews of Jazz albums of my choice.
                            I am Dongbin Alistaire Suh, a software engineer, Jazz enthusiast, and amateur Jazz pianist.
                            You can find my previous reviews in "Monthly Album Review" link above.
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
               <hr/>
                <div id="album-of-this-month" className="main-content-body">
                    <img src={Sample_Album} className="main-content-body-image" alt="album"/>
                    <div className="main-content-body-text">
                        <div>
                            <sub>{today.getMonth() + 1}. {today.getFullYear()}</sub>
                            <h2>We Get Requests</h2>
                            <p className="album-of-this-month-artist-name">
                                The Oscar Peterson Trio
                            </p>
                        </div>
                        
                        <p className="album-of-this-month-artist-name">
                            Oscar Peterson<br/>
                            (1925 ~ 2007)
                        </p>
                        <img src={Sample_Arist} className="album-of-this-month-artist-image" alt="artist"/>
                    </div>
               </div>
               <hr/>
               <h3 className="center-text">Recent Reviews</h3>
                <br/>
                <div id="reviews-previous-reviews">
                    {renderReviews(PopularReviews)}
                </div>
                <hr/>
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
