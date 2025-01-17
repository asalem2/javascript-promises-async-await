import { fetchWithTimeout, fetchMovies, fetchBooks} from './services';
const movies = require('./data/movies.json');
const getBooksAndMovies = () => {
    return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
        books, 
        movies
    }))
    .catch(error => console.log("Error fetching books and movies", error));
}
const getBooksAndMoviesProvies = getBooksAndMovies();
getBooksAndMoviesProvies.then(results => {
    console.log('getBooksAndMoviesPromise', results);
});