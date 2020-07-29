import React from 'react';
import {Link} from 'react-router-dom';
import {RenderMonth} from '../funcs';

/*
    Card.js : My Original Custom Component where text overlays on top of image

    Parameter:
        image: image for the component
        album: album title 
        artist: name of the album artist
        month: month when it is reviewed
        year: year when it is reviewed
        size: size of the card for responsive view
        link: link to the corresponding review
*/

const Card = (props)=>{
    const {
        image,
        album,
        artist,
        month,
        year,
        size,
        link
    } = props;

    const renderCSS = ()=>{
        switch (size){
            case 'fluid':
                return "container width100";
            default:
                return "container width33";
        }
    };

    return (
        <div className={renderCSS()}>
            <img src={image} alt="album" className="image"/>
            <div class="overlay">
                <div class="text">
                    <p>{RenderMonth(month)}. {year}</p>
                    <h5>{album}</h5>
                    <p>{artist}</p>
                    <p>
                        <Link to={link}>
                            <button type="button" className="btn btn-outline-light btn-lg btn-block">
                                Read this Review
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export {Card};
