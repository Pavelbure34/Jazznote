import React from 'react';
import {RenderMonth} from '../funcs';
import {Navigation, Footer, PopularReviews} from '.';
import {Table, Tabs, Tab} from 'react-bootstrap';

/*
    review.js : Page for review
    Parameter:
        information = JSON object holding album information
        year = the year of review
        month =  month when review is posted
        id = special identification for this review empty string by default
        children = contents of the review
    
    How to use this block:
        <Review
            id="sample review"
            information = {sample_info}
            year = {2020}
            month = {10}
        >
            {contents go here}
        </Review>
*/

const Review = (props)=>{
    const {children, information} = props;
    const {
        year,
        month,
        album,
        recorded_year,
        label,
        producer,
        artist,
        session,
        image,
        src,
        tracklist
    } = information;
    
    const renderTracks = ()=>{
        return tracklist.map(track=>{
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

    const RenderSessionmen = ()=>{
        return session.map(man=>{
            const {id, name, instrument} = man;
            return (
                <tr key={id}>
                     <td>
                        <span className="review-essential-information-label">
                            {name}.
                        </span>
                    </td>
                    <td>
                        <span className="review-essential-information-info">
                            {instrument}
                        </span>
                    </td>
                </tr>
            );
        });
    };

    const RenderSources = ()=>{
        return src.map(each=>{
            const {id, title, source, url}  = each;
            return (
                <li key={id}>
                    <sub>{title}. {source}. <a href={url}>{url}</a></sub>
                </li>
            );
        });
    };

    return (
        <article className="review">
            <header>
                <Navigation/>
                <section id="header-content">
                    <p>{RenderMonth(month)}. {year}</p>
                    <h2>{album}</h2>
                    <p>{artist}</p>
                </section>
           </header>
           <section className="main-content">
            <div id="review-essential-information">
                    <img
                        src={image}
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
                                            {album}
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
                                </ul>
                            </Tab>
                            <Tab eventKey="session" title="Session">
                                <Table responsive>
                                    <tbody>
                                        {RenderSessionmen()}
                                    </tbody>
                                </Table>
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
                <section>
                    <ul>
                        <h4>References</h4>
                        {RenderSources()}
                    </ul>
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

export {Review};
