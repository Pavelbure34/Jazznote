import React, {useState} from 'react';
import {Navigation, Footer, Icon} from '../components';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Reviews = ()=>{
    const [search, setSearch] = useState('');

    return (
        <div id="reviews">
            <header>
                <Navigation/>
                <section id="header-content">
                    <h1>Monthly Reviews</h1>
                </section>
            </header>
            <section className="main-content">
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
