import React from 'react';
import {SampleReviews as reviews} from '../data';
import {RenderReviews} from '../funcs';

/*
    popularReviews.js : Block showing popular navigation
*/

const PopularReviews = ()=>{
    return (
        <section>
            <h3 className="center-text">Popular Reviews</h3>
            <br/>
            <div id="reviews-previous-reviews">
                {RenderReviews(reviews)}
            </div>
        </section>
    );
};

export {PopularReviews};
