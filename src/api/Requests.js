const API_KEY = 'e7b6c296929d74d66c1e0a2fb60f4338'

const Requests = {
    trending: `trending/all/day?api_key=${API_KEY}`,
    popularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    nowPlaying:  `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
     topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
 };
 
 export default Requests;
 export {API_KEY};