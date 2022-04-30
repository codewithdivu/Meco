import React, { Component } from 'react';
import Loader from '../common/loader';
import MovieCard from '../common/movieCard';
import Pagination from '../common/pagination';
import { fetchMovies } from '../services/movieService';

class UpcomingMovies extends Component {
    state = {
        upcomingResult: [],
        currentPage: 1,
        isLoading : false
    };

    handlePrevious = () => {
        this.setState({ ...this.state, currentPage: this.state.currentPage - 1 })
        this.fetchData(this.state.currentPage - 1)
    }
    handleNext = () => {
        this.setState({ ...this.state, currentPage: this.state.currentPage + 1 })
        this.fetchData(this.state.currentPage + 1)

    }

    async fetchData(currentPage) {
        this.setState({...this.state, isLoading:true})
        const response = await fetchMovies('upcoming','movie',currentPage);
        this.setState({ ...this.state, upcomingResult: response, isLoading:false });
    }

    componentDidMount() {
        this.fetchData(this.state.currentPage);
    }
    render() {
        const { upcomingResult } = this.state;
        if(this.state.isLoading) return <Loader />
        return (
            <>
                <div className='container d-flex flex-wrap w-100 justify-content-center'>
                    {
                        upcomingResult?.map(movie => (
                            <MovieCard movie={movie} />
                        ))
                    }
                </div>
                <Pagination
                    handlePrevious={this.handlePrevious}
                    handleNext={this.handleNext}
                    currentPage={this.state.currentPage}
                />
            </>

        );
    }
}


export default UpcomingMovies;