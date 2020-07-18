import React from 'react';
import {RenderMonth} from '../funcs';

const Card = (props)=>{
    const {image, album, artist, month, year, size, link} = props;

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
                        <button type="button" className="btn btn-outline-light btn-lg btn-block">
                            Read this Review
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export {Card};
