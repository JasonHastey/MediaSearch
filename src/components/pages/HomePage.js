import React, { useContext } from 'react'
import {Search} from '../Search';
import NowPlaying from '../NowPlaying';
import ComingSoon from '../ComingSoon';

import AppContext from '../../context/app/appContext';
import CategoryGroup from '../CategoryGroup';

const now_playing = {
    0: {
        popularity: 258.754, vote_count: 1948, video: false, poster_path: "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg", id: 338762 
    },
    1: {
        popularity: 169.746, vote_count: 3284, video: false, poster_path: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg", id: 454626 
    },
    2: {
        popularity: 123.941, vote_count: 947, video: false, poster_path: "/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg", id: 443791 
    },
    3: {
        popularity: 105.301, vote_count: 6777, video: false, poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", id: 496243 
    },
    4: {
        popularity: 89.862, vote_count: 10, video: false, poster_path: "/7BC2Mv2ekyBIto68YOrc1DRARv6.jpg", id: 597295 
    },
    5: {
        popularity: 89.397, vote_count: 1517, video: false, poster_path: "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg", id: 508439 
    },
    6: {
        popularity: 85.916, vote_count: 494, video: false, poster_path: "/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg", id: 446893 
    },
    7: {
        popularity: 83.052, vote_count: 872, video: false, poster_path: "/z4A6mFOLTMZAhCSPRyrtzG0SPbd.jpg", id: 475303 
    },
    8: {
        popularity: 73.145, vote_count: 259, video: false, poster_path: "/h1JzHjFJXNJb3QTCwWmm2UbWEwn.jpg", id: 585244 
    },
    9: {
        popularity: 71.108, vote_count: 41, video: false, poster_path: "/v1DbnzXChoymNghOGAjFUZ9KYP1.jpg", id: 430155 
    },
    10: {
        popularity: 64.085, vote_count: 1659, video: false, poster_path: "/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg", id: 570670 
    },
    11: {
        popularity: 59.638, vote_count: 1360, video: false, poster_path: "/xnjvwfDulnOCy8qtYX0iqydmMhk.jpg", id: 448119 
    },
    12: {
        popularity: 57.791, vote_count: 463, video: false, poster_path: "/8ZMrZGGW65ePWIgRn1260nA1uUm.jpg", id: 539537 
    },
    13: {
        popularity: 52.408, vote_count: 1973, video: false, poster_path: "/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg", id: 331482 
    },
    14: {
        popularity: 48.7, vote_count: 188, video: false, poster_path: "/n2C6jRK9PtPIs99RQhKtqGlsnsO.jpg", id: 592834 
    },
    15: {
        popularity: 46.356, vote_count: 14029, video: false, poster_path: "/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg", id: 263115 
    },
    16: {
        popularity: 46.296, vote_count: 6, video: false, poster_path: "/3xPMEWPTp3VkBBYGnp8rlPZP110.jpg", id: 678314 
    },
    17: {
        popularity: 46.159, vote_count: 570, video: false, poster_path: "/rmflsMjk4lxx2foNUtd1OKWv6vB.jpg", id: 514847 
    },
    18: {
        popularity: 43.981, vote_count: 0, video: false, poster_path: "/luf4OthJT845DF4BTMun4TRmh69.jpg", id: 579400 
    },
    19: {
        popularity: 41.594, vote_count: 171, video: false, poster_path: "/zwgPO5bamUuajIAEc02q9XZ2qhq.jpg", id: 529485 
    }
}


export const HomePage = () => {
    const appContext = useContext(AppContext);
    const { search, nowPlaying, getNowPlaying, comingSoon, getTopRated, topRated } = appContext;

    return (
        <div>
            <Search />
            <NowPlaying />
            <ComingSoon />
            <CategoryGroup categoryTitle='Popular' movies={comingSoon} getCategory={getTopRated} />
        </div>
    )
}
