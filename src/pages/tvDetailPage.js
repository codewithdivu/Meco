import React, { useEffect, useState } from 'react'
import MovieDetails from '../common/movieDetails';
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from '../services/movieService';
import Loader from '../common/loader';

const TVDetailPage = () => {

    const [tvDetail, setTVDetail] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const { tvId } = useParams();
    useEffect(() => {
        const fetchmovie = async () => {
            setIsLoading(true)
            const result = await fetchMovieDetails(tvId, 'tv');
            console.log('result', result)
            result && setTVDetail(result)
            setIsLoading(false)
        }
        tvId && fetchmovie()
    }, [tvId])

    if (isLoading) return <Loader />
    return (
        <MovieDetails movieData={tvDetail} />
    )
}


export default TVDetailPage;