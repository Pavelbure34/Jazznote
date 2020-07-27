import React from 'react';
import {RenderMonth} from '../funcs';
import {Navigation, Footer, PopularReviews} from '.';
import {Table, Tabs, Tab} from 'react-bootstrap';

const Review = (props)=>{
    const {children, information, year, month, id} = props;
    const {
        title, artist, recorded_year, label,
        producer, album_length, src, tracks,
        album_image, artist_image
    } = information;
    
    const renderTracks = ()=>{
        return tracks.map(track=>{
            const {id, track_title, track_length} = track;
            return (
                <tr key={id}>
                    <td>
                        <span className="review-essential-information-label">
                            {id}.
                        </span>
                    </td>
                    <td>
                        <span className="review-essential-information-info">
                            {track_title}
                        </span>
                    </td>
                    <td>
                        <span className="review-essential-information-info">
                            {track_length}
                        </span>
                    </td>
                </tr>
            );
        });
    };

    return (
        <article id={id} className="review">
            <header>
                <Navigation/>
                <section id="header-content">
                    <p>{RenderMonth(month)}. {year}</p>
                    <h2>{title}</h2>
                    <p>{artist}</p>
                </section>
           </header>
           <section className="main-content">
            <div id="review-essential-information">
                    <img
                        src={album_image}
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
                                            {title}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Artist
                                        </span>
                                        <span className="review-essential-information-info">
                                            {artist}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Recorded Year
                                        </span>
                                        <span className="review-essential-information-info">
                                            {recorded_year}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Label
                                        </span>
                                        <span className="review-essential-information-info">
                                            {label}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Producer
                                        </span>
                                        <span className="review-essential-information-info">
                                            {producer}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="review-essential-information-label">
                                            Length
                                        </span>
                                        <span className="review-essential-information-info">
                                            {album_length}
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
                {children}
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

export {Review};
