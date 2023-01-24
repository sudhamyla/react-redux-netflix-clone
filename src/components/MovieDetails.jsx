import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { useParams } from 'react-router-dom'
import { API_KEY } from '../api/Requests';
import axios from 'axios';

import {AiOutlinePlayCircle} from "react-icons/ai"
import {BiMoviePlay}  from "react-icons/bi"
import {BsPlusSquare} from "react-icons/bs"
import {BsShare}  from "react-icons/bs"
import NavBar from './NavBar';

const MovieDetails = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const baseImageURL = 'https://image.tmdb.org/t/p';
    const movieUrl= `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    useEffect( ()=> {
        async function fetchMovie() {
            const request = await axios.get(movieUrl);
            setMovie(request.data);
            return request;
        }
        fetchMovie();
        console.log(movie);
    }, [id])

    const truncateMovieOverview = (overview, number)=> {
        if (overview?.length > number) {
            return overview.slice (0, number) + '...';
        }
        else {
            return overview;
        }   
    }
    
  return (
  <>
      <NavBar/>
    <MovieDetailsContainer>
        <Overlay/>
        <img src={`${baseImageURL}/original/${movie?.backdrop_path}`} alt={movie?.title}
                    className='w-full h-full object-cover'/>
       <MovieInfoBox>
          <span className='text-3xl mt-2 sm:text-4xl mb-6'>{movie?.original_title}</span>
          <p className='text-base text-justify' >
                Overview: {truncateMovieOverview(movie?.overview, 160)}
          </p>
          <MovieInfo>
              <div className='text-base'> Release Date: {movie?.release_date}</div>
              <div className='text-base'> Popularity: {movie?.popularity}</div>
              <div className='text-base'> Vote Average: {movie?.vote_average}</div>
         </MovieInfo>
         <Controls>
              <WatchMovie>
                 <PlayIcon className='w-6 h-6 sm:w-10 sm:h-10'  />
                 <span className='text-base'>Watch Movie</span>
              </WatchMovie>
              <Trailer>
                      <TrailerIcon className='w-6 h-6 sm:w-10 sm:h-10'/>
                      <span className='text-base'>Trailer</span>
              </Trailer>
              <WatchList>
                      <PlusIcon className='w-4 h-4 sm:w-8 sm:h-8'/>
                      <span className='text-base'>Watch List</span>
              </WatchList>
              <Share>
                      <ShareIcon className='w-4 h-4 sm:w-8 sm:h-8' />
                      <span className='text-base'>Share</span>
              </Share>
          </Controls>
       </MovieInfoBox>
  </MovieDetailsContainer>
</>
)
}

export default MovieDetails;

const MovieDetailsContainer = tw.div`
  overflow-hidden top-32 sm:top-0 w-full h-full p-0 
`;
const Overlay = tw.div`
    absolute w-full h-full bg-gradient-to-b from-black
`;
const MovieInfoBox = tw.div`
flex flex-col w-4/5 sm:w-1/2 absolute top-0 left-20 sm:top-40 sm:left-16 p-0 
`;

const MovieInfo = tw.div`
flex  w-full justify-between p-0 text-base tracking-wide my-6
`;

const Controls = tw.div`
flex w-full items-center justify-between
`;

const WatchMovie = tw.div`
flex gap-1 items-center justify-center
`;

const Trailer = tw(WatchMovie)``;
const WatchList = tw(WatchMovie)``;
const Share = tw(WatchMovie)``;


const PlayIcon = tw(AiOutlinePlayCircle)``;
const TrailerIcon = tw(BiMoviePlay)``;
const PlusIcon = tw(BsPlusSquare)``;
const ShareIcon = tw(BsShare)``;