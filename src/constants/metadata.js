import { NOW_PLAYING_MOVIES, POPULAR_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from "./route";

export const sliderItems = [{
    id: 0,
    movieType: 'popular',
    label: 'Popular',
    path : POPULAR_MOVIES
},
{
    id: 1,
    movieType: 'upcoming',
    label: 'Upcoming',
    path: UPCOMING_MOVIES
},
{
    id: 2,
    movieType: 'now_playing',
    label: 'Now Playing',
    path: NOW_PLAYING_MOVIES
},
{
    id: 3,
    movieType: 'top_rated',
    label: 'Top Rated',
    path: TOP_RATED_MOVIES
}
]