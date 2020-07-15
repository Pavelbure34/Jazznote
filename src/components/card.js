import React from 'react';

const Card = (props)=>{
    const {image, album, artist, month, year, link} = props;

    return (
        <a href={link}>
            <div class="container">
                <img src={image} alt="Avatar" className="image"/>
                <div class="overlay">
                    <div class="text">
                        <p>{month}. {year}</p>
                        <h5>{album}</h5>
                        <p>{artist}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export {Card};
