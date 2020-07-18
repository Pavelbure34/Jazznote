import React from 'react';
import {RenderMonth} from '../funcs';
import {Footer, Navigation, PopularReviews} from '../components';
import {Table, Tabs, Tab} from 'react-bootstrap';
import {Sample_Arist, Sample_Album} from '../assets/images';
import './styles/july2020_we_get_requests.scss';

const July2020_wegetrequests = ()=>{

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
                        src={Sample_Album}
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
                                        <tr>
                                            <td>
                                                <span className="review-essential-information-label">
                                                    1.
                                                </span>
                                            </td>
                                            <td>
                                                <span className="review-essential-information-info">
                                                    Corcovado
                                                </span>
                                            </td>
                                            <td>
                                                <span className="review-essential-information-info">
                                                    2:49
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="review-essential-information-label">
                                                    2.
                                                </span>
                                            </td>
                                            <td>
                                                <span className="review-essential-information-info">
                                                    The Days of Wines and Roses
                                                </span>
                                            </td>
                                            <td>
                                                <span className="review-essential-information-info">
                                                    2:40
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div id="review-artist-information">
                    <div id="review-artist-information-text">
                        <p>Leading Artist</p>
                        <h3>Oscar Peterson</h3>
                        <p>1927 ~ 2007</p>
                    </div>
                    <img src={Sample_Arist} id="review-artist-information-image" alt="artist image"/>
                </div>
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
