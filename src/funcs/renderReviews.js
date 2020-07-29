import React from 'react';
import {Card} from '../components';

/*
    RenderReviews.js : function that renders review blocks

    Parameter:
        reviews: an array of reviews
    
    How to use:
        RenderReviews(data) //renders review block
*/

const RenderReviews = (reviews)=>{

    return reviews.map(review=>{
        const {
            id,
            album,
            artist,
            month,
            year,
            link,
            image
        } = review;

        return (
            <Card
                key={id}
                image={image}
                album={album}
                artist={artist}
                month={month}
                year={year}
                link={link}
            />
        )
    });
};

export {RenderReviews};
