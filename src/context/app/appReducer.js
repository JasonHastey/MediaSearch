import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS, 
    SEARCH_MOVIES,
    NOW_PLAYING,
    COMING_SOON
  } from "../types";
  
  export default (state, action) => {
    switch (action.type) {
      case SEARCH_MOVIES:
        return {
          ...state,
          searchResults: action.payload
        };
      case NOW_PLAYING:
        return {
          ...state,
          nowPlaying: action.payload
        };
      case COMING_SOON:
        return {
          ...state,
          comingSoon: action.payload
        };        
      default:
        return state;
    }
  };