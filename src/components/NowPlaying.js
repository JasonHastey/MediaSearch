import React, { useContext, useEffect } from 'react';

import {MoviePreview} from './MoviePreview';
import {SmMoviePreview} from './SmMoviePreview';

import AppContext from '../context/app/appContext';

import "../App.scss"


const NowPlaying = () => {
    const appContext = useContext(AppContext);
    const { search, nowPlaying, getNowPlaying } = appContext;

    useEffect(() => {
        getNowPlaying();
        console.log(nowPlaying)
    }, [])

    return (
        <div className="category">
            <h3 className="category--title">Now Playing</h3>
            {/* <button onClick={() => {getNowPlaying()}}>Press</button> */}
            <div className="category--movies">
                {
                    nowPlaying.map(movie => (
                        <SmMoviePreview movie={movie} key={movie.id}  />
                    ))
                }
            </div>
        </div>
    )
}
  
  export default NowPlaying;