import React, { useReducer } from "react";
import axios from "axios";
import AppContext from "./appContext";
import appReducer from "./appReducer";

import {
  SEARCH_MOVIES,
  NOW_PLAYING,
  COMING_SOON
} from "../types";

const api_key = '460434c9495cf2dd6d32ac80934bf675';

const AuthState = props => { 
  const initialState = {
    searchResults: [],
    nowPlaying: [],
    comingSoon: []
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const search = (query) => {
    console.log(query);

    if(query !== ''){
      const URL = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${query}&page=1`;
      
      //const URL = `https://api.themoviedb.org/3/search/multi?include_adult=false&page=1&language=en-US&api_key=${api_key}&query=${searchResult}`;

      return axios.get(URL).then(function(response){
          let results = response.data.results;
          console.log(results)
          dispatch({
            type: SEARCH_MOVIES,
            payload: results
          });
        }).catch(function(error){
          console.log(error);
      });
    } 
  }

  const getNowPlaying = () => {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;

    axios.get(URL).then(response => {
      let results = response.data.results;
      console.log(results);
      dispatch({
        type: NOW_PLAYING,
        payload: results
      });
    })

  }

  const getComingSoon = () => {
    const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

    axios.get(URL).then(response => {
      let results = response.data.results;
      console.log(results);
      dispatch({
        type: COMING_SOON,
        payload: results
      });
    })

  }

  const getTopRated = () => {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;

    axios.get(URL).then(response => {
      let results = response.data.results;
      console.log(results);
      
      dispatch({
        type: NOW_PLAYING,
        payload: results
      });
    })
  }
  


  return (
    <AppContext.Provider
      value={{
        searchResults: state.searchResults,
        nowPlaying: state.nowPlaying,   
        comingSoon: state.comingSoon,        
        search, 
        getNowPlaying,
        getComingSoon,
        getTopRated
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AuthState;

