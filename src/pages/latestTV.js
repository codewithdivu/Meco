import React, { Component } from 'react';
import MovieCard from '../common/movieCard';
import Pagination from '../common/pagination';
import { fetchMovies } from '../services/movieService';


class LatestTV extends Component {
    state = {
        latestTVResult: [],
        currentPage: 1
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
        // console.log('currentPage', currentPage)
        const response = await fetchMovies('latest','tv',currentPage);
        // console.log('response', response)
        this.setState({ ...this.state, latestTVResult: response });
    }

    componentDidMount() {
        this.fetchData(this.state.currentPage);
    }


    render() {
        const { latestTVResult } = this.state;
        return (
            <>
                <div className='container d-flex flex-wrap w-100 justify-content-center'>
                    {
                        latestTVResult?.map(movie => (
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

export default LatestTV;