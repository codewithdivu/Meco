import React, { useEffect, useState } from 'react'
import MovieDetails from '../common/movieDetails';
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from '../services/movieService';

const MovieDetailPage = () => {

    const [movieDetail, setMovieDetail] = useState('')


    const { movieId } = useParams();
    useEffect(() => {
        const fetchmovie = async () => {
            const result = await fetchMovieDetails(movieId,'movie');
            // console.log('result', result)
            result && setMovieDetail(result)
        }
        movieId && fetchmovie()
    }, [movieId])
    // console.log('movieDetail', movieDetail)
    return (
        <MovieDetails movieData={movieDetail} />
    )
}


export default MovieDetailPage;