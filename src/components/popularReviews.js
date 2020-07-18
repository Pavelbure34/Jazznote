import React from 'react';
import {PopularReviews as reviews} from '../data';
import {RenderReviews} from '../funcs';

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
