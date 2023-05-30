import axios from "axios";

async function getTrending () {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
    const params = new URLSearchParams({
        api_key: 'f06240549d838abb3d31b9bb8bd509ce',
    });
    return await axios.get(`${BASE_URL}?${params}`); 
};

async function searchMovie (q) {
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const params = new URLSearchParams({
        api_key: 'f06240549d838abb3d31b9bb8bd509ce',
        query: q,
    });
    return await axios.get(`${BASE_URL}?${params}`); 
};

async function getMovieDetails (movie_id) {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movie_id}`;
    const params = new URLSearchParams({
        api_key: 'f06240549d838abb3d31b9bb8bd509ce',
    });
    return await axios.get(`${BASE_URL}?${params}`); 
};

async function getMovieCredits (movie_id) {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
    const params = new URLSearchParams({
        api_key: 'f06240549d838abb3d31b9bb8bd509ce',
    });
    return await axios.get(`${BASE_URL}?${params}`); 
};

async function getMovieReviews (movie_id) {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
    const params = new URLSearchParams({
        api_key: 'f06240549d838abb3d31b9bb8bd509ce',
    });
    return await axios.get(`${BASE_URL}?${params}`); 
};

const API = {
    getTrending,
    searchMovie,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
};

export default API;