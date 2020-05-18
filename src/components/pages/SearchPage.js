import React, { useContext, useState } from 'react'

import {SmMoviePreview} from '../SmMoviePreview';  

import AppContext from '../../context/app/appContext'

export const SearchPage = () => {
    const appContext = useContext(AppContext);
    const { search, searchResults } = appContext;

    const [ queryString, set_queryString ] = useState("");

    const handleChange = (e) => {
        set_queryString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search(queryString);
        console.log(queryString)
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Search" name="search"/>
            <button >Submit</button>
          </form>
          <div>
              {searchResults.map((movie) => (
                  <SmMoviePreview movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
    )
}
