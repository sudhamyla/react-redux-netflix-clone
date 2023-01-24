import React from 'react'
import Requests from '../api/Requests';
import MovieRow from './MovieRow';

const MovieGrid = () => {
  return (
    <div >
    <MovieRow category='Trending' moviesUrl ={Requests.trending}/>
    <MovieRow category='Popular Movies' moviesUrl= {Requests.popularMovies}/>
    <MovieRow category='Now Playing' moviesUrl ={Requests.nowPlaying}/>
    <MovieRow category='Top Rated' moviesUrl ={Requests.topRated}/>
    <MovieRow category='Upcoming' moviesUrl ={Requests.upcoming}/>
   </div>

  )
}

export default MovieGrid
