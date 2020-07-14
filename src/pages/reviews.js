import React, {useState} from 'react';
import {Navigation, Footer, Icon} from '../components';
import {InputGroup, FormControl, Button, Jumbotron} from 'react-bootstrap';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Reviews = ()=>{
    const [search, setSearch] = useState('');

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
                <Jumbotron id="reviews-jumbotron" className="main-content-jumbotron">
                    <div className="main-content-jumbotron-text">
                        <h2>Monthly Review</h2>
                        <p>
                            I post monthly reviews here.
                            You can find all my previous reviews here.
                        </p>
                    </div>
                </Jumbotron>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={event=>setSearch(event.target.value)}
                        placeholder="Album title"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary">
                        <Icon icon={faSearch} size="1x" color="#000000"/>
                    </Button>
                </InputGroup>
                <div id="reviews-search-result">

                </div>
                <div id="reviews-previous-reviews">
                    
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export {Reviews};
