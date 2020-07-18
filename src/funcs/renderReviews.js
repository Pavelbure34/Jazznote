import React from 'react';
import {Card} from '../components';

const RenderReviews = (reviews)=>{
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

export {RenderReviews};
