import React, { useEffect, useState } from 'react'
import MovieDetails from '../common/movieDetails';
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from '../services/movieService';
import Loader from '../common/loader';

const MovieDetailPage = () => {

    const [movieDetail, setMovieDetail] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const { movieId } = useParams();
    useEffect(() => {
        const fetchmovie = async () => {
            setIsLoading(true)
            const result = await fetchMovieDetails(movieId, 'movie');
            result && setMovieDetail(result)
            setIsLoading(false)
        }
        movieId && fetchmovie()
    }, [movieId])

    if (isLoading) return <Loader />
    return (
        <MovieDetails movieData={movieDetail} />
    )
}


export default MovieDetailPage;