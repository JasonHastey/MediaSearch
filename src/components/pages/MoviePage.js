import React, { useContext } from 'react'

import {MoviePreview} from '../MoviePreview';

import AppContext from '../../context/app/appContext';

export const MoviePage = () => {
    const appContext = useContext(AppContext);

    const { search, getNowPlaying, nowPlaying } = appContext;
    
    return (
        <div>
            <button onClick={() => {getNowPlaying()}}>Press</button>
            <div>
                {
                nowPlaying.map(movie => (
                    <MoviePreview movie={movie} key={movie.id} />
                ))
                }</div>
        </div>
    )
}
