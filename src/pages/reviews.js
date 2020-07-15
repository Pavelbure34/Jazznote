import React, {useState} from 'react';
import {PopularReviews, SampleReviews} from '../data';
import {Navigation, Footer, Icon, Card} from '../components';
import {InputGroup, FormControl, Button, Jumbotron} from 'react-bootstrap';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Reviews = ()=>{
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);

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

    const filterSearchResult = ()=>{
        let res = SampleReviews.filter(item=>{
            if (item.album.includes(search))
                return item;
        });
        setResult(res);
    };

    return (
        <div id="reviews">
            <header>
                <Navigation/>
                <section id="header-content">
                    <h1 className="title">Jazz Note</h1>
                    <sub>Music and Review</sub>
                </section>
            </header>
            <section className="main-content">
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={event=>setSearch(event.target.value)}
                        placeholder="Album title"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" onClick={()=>filterSearchResult()}>
                        <Icon icon={faSearch} size="1x" color="#000000"/>
                    </Button>
                </InputGroup>
                <Jumbotron id="reviews-jumbotron" className="main-content-jumbotron">
                   
                </Jumbotron>
                <div id="reviews-search-result">
                    {renderReviews(result)}
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

export {Reviews};
