import React from 'react';
import {RenderMonth} from '../funcs';
import {Footer, Navigation, PopularReviews} from '../components';
import {Table, Tabs, Tab} from 'react-bootstrap';
import {OscarPeterson, WeGetRequests} from '../assets/images';

const July2020_wegetrequests = ()=>{
    const Tracklist = [
        {
            id:1,
            song:'Corcovado',
            duration:'2:49'
        },
        {
            id:2,
            song:'The Days of Wines and Roses',
            duration:'2:40'
        },
        {
            id:3,
            song:'My One and Only Love',
            duration:'5:08'
        },
        {
            id:4,
            song:'People',
            duration:'3:30'
        },
        {
            id:5,
            song:'Have You Met Miss Jones',
            duration:'4:10'
        },
        {
            id:6,
            song:'You Look Good To Me',
            duration:'4:49'
        },
        {
            id:7,
            song:'The Girl From Ipanema',
            duration:'4:49'
        },
        {
            id:8,
            song:'D&E',
            duration:'5:11'
        },
        {
            id:9,
            song:'Time And Again',
            duration:'4:38'
        },
        {
            id:10,
            song:'Goodbye J.D',
            duration:'2:56'
        },
    ];

    const renderTracks = ()=>{
        return Tracklist.map(track=>{
            const {id, song, duration} = track;
            return (
                <tr key={id}>
                    <td>
                        <span className="review-essential-information-label">
                            {id}.
                        </span>
                    </td>
                    <td>
                        <span className="review-essential-information-info">
                            {song}
                        </span>
                    </td>
                    <td>
                        <span className="review-essential-information-info">
                            {duration}
                        </span>
                    </td>
                </tr>
            );
        });
    };

    return (
        <article id="july2020-we_get_requests" className="review">
            <header>
                <Navigation/>
                <section id="header-content">
                    <p>{RenderMonth(7)}. 2020</p>
                    <h2>We Get Requests</h2>
                    <p>The Oscar Peterson Trio</p>
                </section>
           </header>
           <section className="main-content">
                <div id="review-essential-information">
                    <img
                        src={WeGetRequests}
                        id="review-essential-information-image"
                        alt="album-art"
                    />
                    <div id="review-essential-information-text">
                        <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
                            <Tab eventKey="info" title="Details">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Title
                                        </span>
                                        <span className="review-essential-information-info">
                                            We Get Requests
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Artist
                                        </span>
                                        <span className="review-essential-information-info">
                                            The Oscar Peterson Trio
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Recorded Year
                                        </span>
                                        <span className="review-essential-information-info">
                                            1964
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Label
                                        </span>
                                        <span className="review-essential-information-info">
                                            Verve
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Producer
                                        </span>
                                        <span className="review-essential-information-info">
                                            Norman Granz
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Length
                                        </span>
                                        <span className="review-essential-information-info">
                                            39:42
                                        </span>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="tracks" title="Track List">
                                <Table responsive>
                                    <tbody>
                                        {renderTracks()}
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <br/>
                <article>
                    <section>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                        aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                        aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                        aliquam id sapien.
                    </section>
                    <blockquote className="review-album-oneliner">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                    </blockquote>
                    <section>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                        aliquam id sapien.Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                        aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                        aliquam id sapien.
                    </section>
                </article>
                <br/>
                <section className="review-artist-information">
                    <img src={OscarPeterson} className="review-artist-information-image" alt="artist-image"/>
                    <article className="review-artist-information-text">
                        <h3>Oscar Peterson(1925 ~ 2007)</h3>
                        <section>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                            aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                            aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                            aliquam id sapien.
                        </section>
                    </article>
                </section>
                <br/>
                <section>
                    <h3 className="center-text">Source for information</h3>
                    
                </section>
                <br/>
                <PopularReviews/>
           </section>
           <footer>
                <hr/>
                <Footer/>
           </footer>
        </article>
    );
};

export {July2020_wegetrequests};
