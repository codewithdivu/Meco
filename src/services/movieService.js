
const fetchMovies = async (typeName,page=1) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${typeName}?api_key=5e7853fa38844856be15b0d1afefedc3&language=en-US&page=${page}`);

    let data = await response.json();
    let arr = data.results;
    return arr;
}

export { fetchMovies };