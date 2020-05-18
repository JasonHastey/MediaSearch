import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types';

import {MoviePreview} from './MoviePreview';

import "./CategoryGroup.scss";

import AppContext from '../context/app/appContext';

const CategoryGroup = ({props}) => {
    const appContext = useContext(AppContext);
    const { search, nowPlaying, getNowPlaying } = appContext;
    

    useEffect(() => {
        
    }, [])


    return (
        // {
        //     nowPlaying.map(movie => (
        //         <SmMoviePreview movie={movie} key={movie.id}  />
        //     ))
        // }

        <div>
            HELP
            {/* {
                nowPlaying.map((movie) => (
                    <div className="category--movie">
                        <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} /> 
                        <div className="category--info">
                            <div className="category--container">
                                <div className="category--subcontainer">
                                    <div className="rating">{movie.vote_average}</div>
                                </div>
                            </div>
                            <h6 className="category--name">{props.categoryTitle}</h6>
                        </div>
                    </div>
                ))
            } */}
        </div>
        

    )
}

CategoryGroup.defaultProps = {
    categoryTitle: 'Popular',
    movies: [],
    getNowPlaying: () => {} 
  };
  
  CategoryGroup.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired
  }; 
  
  export default CategoryGroup;