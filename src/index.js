const movies = require('./data/movies.json');
import { fetchWithTimeout } from "./services";
export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeout(setTimeout(() => {
        
    }, 1000)).then(fetchMovies);
}
const moviePromise = fetchMovies();
moviePromise.then();