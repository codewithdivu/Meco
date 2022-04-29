import React, { useEffect, useState } from 'react'
import MovieDetails from '../common/movieDetails';
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from '../services/movieService';

const TVDetailPage = () => {

    const [tvDetail, setTVDetail] = useState('')


    const { tvId } = useParams();
    useEffect(() => {
        const fetchmovie = async () => {
            const result = await fetchMovieDetails(tvId,'tv');
            // console.log('result', result)
            result && setTVDetail(result)
        }
        tvId && fetchmovie()
    }, [tvId])
    
    return (
        <MovieDetails movieData={tvDetail} />
    )
}


export default TVDetailPage;