
const fetchMovies = async (typeName, name, page = 1) => {
    const response = await fetch(`https://api.themoviedb.org/3/${name}/${typeName}?api_key=5e7853fa38844856be15b0d1afefedc3&language=en-US&page=${page}`);

    let data = await response.json();
    let arr = data.results.map(movie => ({ ...movie, dataType: name }));
    return arr;
}

const fetchMovieDetails = async (movieId, name) => {
    // console.log('movieId', movieId);
    // console.log('name', name);
    const response = await fetch(`https://api.themoviedb.org/3/${name}/${movieId}?api_key=5e7853fa38844856be15b0d1afefedc3&language=en-US`);

    let data = await response.json();
    return data;

}


export { fetchMovies, fetchMovieDetails };