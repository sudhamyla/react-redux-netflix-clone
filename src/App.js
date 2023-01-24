import React, {useEffect} from 'react'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import Signin from './pages/Signin'
import {auth, onAuthStateChanged} from './firebase'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/userSlice'
import Profile from './pages/Profile'
import MovieDetails from './components/MovieDetails'

const App = () => {
  const dispatch = useDispatch();

  useEffect (  ()=> {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          // logged in
          dispatch(login({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          }))
        } else {
          dispatch(logout)

        }
    }  )
}, [] );
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/movieDetails/:id" element={<MovieDetails/>}/>
      </Routes>
      
    </div>
  )
}

export default App
