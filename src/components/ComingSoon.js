import React, { useContext, useEffect } from 'react';

import {MoviePreview} from './MoviePreview';

import AppContext from '../context/app/appContext';

const ComingSoon = () => {
    const appContext = useContext(AppContext);
    const { search, comingSoon, getComingSoon } = appContext;

    useEffect(() => {
        getComingSoon();
        console.log(comingSoon)
    }, [])

    return (
        <div className="category">
            <h3 className="category--title">Now Playing</h3>
            {/* <button onClick={() => {getNowPlaying()}}>Press</button> */}
            <div className="category--movies">
                {
                    comingSoon.map(movie => (
                        <MoviePreview movie={movie} key={movie.id}  />
                    ))
                }
            </div>
        </div>
    )
}
  
  export default ComingSoon;