import { AIRING_TODAY_TV, LATEST_TV, NOW_PLAYING_MOVIES, ON_THE_AIR_TV, POPULAR_MOVIES, POPULAR_TV, TOP_RATED_MOVIES, TOP_RATED_TV, UPCOMING_MOVIES } from "./route";

export const sliderItems = [{
    id: 0,
    movieType: 'popular',
    label: 'Popular',
    path: POPULAR_MOVIES
    , type: 'movie'
},
{
    id: 1,
    movieType: 'upcoming',
    label: 'Upcoming',
    path: UPCOMING_MOVIES
    , type: 'movie'
},
{
    id: 2,
    movieType: 'now_playing',
    label: 'Now Playing',
    path: NOW_PLAYING_MOVIES
    , type: 'movie'
},
{
    id: 3,
    movieType: 'top_rated',
    label: 'Top Rated',
    path: TOP_RATED_MOVIES
    , type: 'movie'
}
]

export const tvMetaData = [
    {
        id: 0,
        movieType: 'latest',
        label: 'Latest',
        path: LATEST_TV
        , type: 'tv'
    },
    {
        id: 1,
        movieType: 'airing_today',
        label: 'Airing Today',
        path: AIRING_TODAY_TV
        , type: 'tv'
    },
    {
        id: 2,
        movieType: 'on_the_air',
        label: 'On The Air',
        path: ON_THE_AIR_TV
        , type: 'tv'
    },
    {
        id: 3,
        movieType: 'popular',
        label: 'Popular',
        path: POPULAR_TV
        , type: 'tv'
    },
    {
        id: 4,
        movieType: 'top_rated',
        label: 'Top Rated',
        path: TOP_RATED_TV
        , type: 'tv'
    }
]