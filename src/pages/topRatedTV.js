import React, { Component } from 'react';
import Loader from '../common/loader';
import MovieCard from '../common/movieCard';
import Pagination from '../common/pagination';
import { fetchMovies } from '../services/movieService';

class TopRatedTV extends Component {
    state = {
        topRatedTVResult: [],
        currentPage: 1,
        isLoader : false
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
        this.setState({...this.state , isLoader:true})
        // console.log('currentPage', currentPage)
        const response = await fetchMovies('top_rated','tv',currentPage);
        // console.log('response', response)
        this.setState({ ...this.state, topRatedTVResult: response, isLoader:false });
    }

    componentDidMount() {
        this.fetchData(this.state.currentPage);
    }



    render() {
        // console.log('this.state', this.state);
        const { topRatedTVResult } = this.state;
        if(this.state.isLoader) return <Loader />
        return (
            <>
                <div className='container d-flex flex-wrap w-100 justify-content-center'>
                    {
                        topRatedTVResult?.map(movie => (
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

export default TopRatedTV;