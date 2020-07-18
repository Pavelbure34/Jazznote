import React, {useState} from 'react';
import {SampleReviews} from '../data';
import {RenderMonth, ToLowerCase, RenderReviews} from '../funcs';
import {Navigation, Footer, Icon, Card, Mainlogo, PopularReviews} from '../components';
import {InputGroup, FormControl, Button, Jumbotron, Form} from 'react-bootstrap';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Reviews = ()=>{
    const today = new Date();
    const current_year = today.getFullYear();
    const current_month = today.getMonth() + 1;

    const [searchBy, setSearchBy] = useState('Title');
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [month, setMonth] = useState(current_month)
    const [year, setYear] = useState(current_year)
   
    const renderYearOptions = ()=>{
        const years = [];
        for (let i = 2020; i <= current_year; i++)
            years.push(i)
        return years.map(each=><option value={each}>{each}</option>);
    };

    const renderMonthOptions = ()=>{
        const months = [];
        for (let i = 1; i <= 12; i++)
            months.push(i);
        return months.map(each=><option value={each}>{RenderMonth(each)}</option>);
    };

    const renderSearchbar = ()=>{
        if (searchBy === "Date")
            return (
                <Form>
                    <Group controlId="ControlSelect1">
                        <Label className="option-label">Month</Label>
                        <Control as="select" value={month} onChange={event=>setMonth(event.target.value)}>
                            {renderMonthOptions()}
                        </Control>
                    </Group>
                    <Group controlId="ControlSelect2">
                        <Label className="option-label">Year</Label>
                        <Control as="select" value={year} onChange={event=>setYear(event.target.value)}>
                            {renderYearOptions()}
                        </Control>
                    </Group>
                    <Group controlId="ControlSelect3">
                        <button
                            type="button"
                            onClick={()=>filterSearchResult()}
                            class="btn btn-secondary btn-lg btn-block">
                            Search
                        </button>
                    </Group>
                </Form>
            );
        else
            return (
                <InputGroup className="mb-3">
                    <FormControl
                        onKeyUp={event=>(event.keyCode === 13)?filterSearchResult():null}
                        onChange={event=>setSearch(event.target.value)}
                        placeholder={renderFilterText()}
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" onClick={()=>filterSearchResult()}>
                        <Icon icon={faSearch} size="1x" color="#000000"/>
                    </Button>
                </InputGroup>
            );
    };

    const renderFilterText = ()=>`Search by ${searchBy}`;

    const filterSearchResult = ()=>{
        let res = [];
    
        if (search !== "" && (searchBy === "Title" || searchBy === "Artist")){
            const keyword = ToLowerCase(search).trim();
            res = SampleReviews.filter(item=>{
                const {album, artist} = item;
                if (searchBy === "Title" && ToLowerCase(album).trim().includes(keyword))
                    return item;
                else if (searchBy === "Artist" && ToLowerCase(artist).trim().includes(keyword))
                    return item;
            });
        } else if (searchBy === "Date"){
            res = SampleReviews.filter(item=>{
                if (item.year === year && item.month === month)
                    return item;
            });
        }
        setResult(res);
    };

    const {Label, Group, Control} = Form
    return (
        <div id="reviews">
            <header>
                <Navigation/>
                <section id="header-content">
                    <Mainlogo/>
                </section>
            </header>
            <section className="main-content">
                <Jumbotron id="reviews-jumbotron" className="main-content-jumbotron">
                    <button
                        type="button"
                        onClick={()=>setSearchBy("Title")}
                        class="btn btn-secondary btn-lg">
                        Search by Title
                    </button>
                    <button
                        type="button"
                        onClick={()=>setSearchBy("Artist")}
                        class="btn btn-secondary btn-lg">
                        Search by Artist
                    </button>
                    <button
                        type="button"
                        onClick={()=>setSearchBy("Date")}
                        class="btn btn-secondary btn-lg">
                        Search by Date
                    </button>
                </Jumbotron>
                <div id="reviews-searchbar">
                    {renderSearchbar()}
                </div>
                <div id="reviews-search-result">
                    {RenderReviews(result)}
                </div>
                <hr/>
                <PopularReviews/>
            </section>
            <footer>
                <hr/>
                <Footer/>
            </footer>
        </div>
    );
};

export {Reviews};
