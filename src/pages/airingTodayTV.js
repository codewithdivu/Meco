import Loader from '../common/loader';
import MovieCard from '../common/movieCard';
import Pagination from '../common/pagination';
import { fetchMovies } from '../services/movieService';




import React, { useEffect, useState } from 'react'

const AiringTodayTV = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [airingTodayTVResult, setAiringTodayTVResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchData(currentPage)

        return () =>
            setAiringTodayTVResult([])
    }, [currentPage])



    const handlePrevious = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const fetchData = async (currentPage) => {
        setIsLoading(true)
        const response = await fetchMovies('airing_today', 'tv', currentPage);
        setAiringTodayTVResult(response)
        setIsLoading(false)
    }

    if (isLoading) return <Loader />
    return (
        <>
            <div className='container d-flex flex-wrap w-100 justify-content-center'>
                {
                    airingTodayTVResult?.map(movie => (
                        <MovieCard movie={movie} />
                    ))
                }
            </div>
            <Pagination
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                currentPage={currentPage}
            />
        </>
    )
}

export default AiringTodayTV;