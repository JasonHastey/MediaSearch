import React, { useContext } from 'react';

import {RatingDisplay} from './RatingDisplay';

import AppContext from '../context/app/appContext';

import "../App.scss";

export const SmMoviePreview = ({movie: {

    original_name,
    genre_ids,
    media_type,
    title,
    popularity,
    origin_country,
    vote_count,
    first_air_date,
    backdrop_path,
    original_language,
    id,
    vote_average,
    overview,
    poster_path }}) => {

    const appContext = useContext(AppContext);
        
    const { search} = appContext;


    return (
        <div className="category--movie">
                <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} /> 
            <div className="category--info">
                <div className="category--container">
                    <div className="category--subcontainer">
                        <div className="rating">{vote_average}</div>
                    </div>
                </div>
                <h6 className="category--name">{title}</h6>
            </div>  
        </div>
    )
}
