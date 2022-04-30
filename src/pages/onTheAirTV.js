import React, { Component } from 'react';
import Loader from '../common/loader';
import MovieCard from '../common/movieCard';
import Pagination from '../common/pagination';
import { fetchMovies } from '../services/movieService';


class OnTheAirTV extends Component {
    state = {
        onTheAirTVResult: [],
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
        this.setState({ isLoading:true})
        // console.log('currentPage', currentPage)
        const response = await fetchMovies('on_the_air','tv',currentPage);
        // console.log('response', response)
        this.setState({ ...this.state, onTheAirTVResult: response,isLoading:false });
    }

    componentDidMount() {
        this.fetchData(this.state.currentPage);
    }


    render() {
        const { onTheAirTVResult } = this.state;

        if(this.state.isLoading) return <Loader />
        return (
            <>
                <div className='container d-flex flex-wrap w-100 justify-content-center'>
                    {
                        onTheAirTVResult?.map(movie => (
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

export default OnTheAirTV;