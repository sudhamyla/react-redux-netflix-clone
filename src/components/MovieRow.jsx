import React, {useState, useEffect} from 'react'
import tw from "tailwind-styled-components"
import axiosInstance from '../api/Axios';   
import { Link } from 'react-router-dom';

const MovieRow = ({category, moviesUrl}) => {

  const [movies, setMovies] = useState([]);
  const baseImageURL = 'https://image.tmdb.org/t/p';

  useEffect( ()=> {
      async function fetchMovies() {
          const request = await axiosInstance.get(moviesUrl);
          setMovies(request.data.results);
          return request;
      }
      fetchMovies();
  }, [ moviesUrl])

  return (
  <>
  <span className='text-white text-2xl pl-3'>{category}</span>
      <Row>
       {
          movies.map((movie, id)=> (
            <Link to= {`/movieDetails/${movie.id}`}>
             <div className='relative'>
              
                 <img src={`${baseImageURL}/original/${movie?.poster_path}`} alt={movie?.name}
                            className='w-[160px] h-[200px] object-cover cursor-pointer' />         
                  <div className='absolute top-0 left-0 right-0 hover:bg-black/70
                      text-white opacity-0 hover:opacity-100 w-full h-full'>
                      <h2 className='p-2'>{movie?.original_title || movie?.name}</h2>
                      <span className='absolute bottom-0 right-0 p-2'>
                      </span>
                  </div>
                  
              </div>  
              </Link>     
          ))
         }
      </Row>    
  </>
)
}

export default MovieRow

const Row = tw.div`
 mt-2 mb-16  grid grid-cols-3  md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-2
 sm:gap-4 px-2 sm:px-0

`;