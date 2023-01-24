import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { Link } from "react-router-dom"
import  { useNavigate } from 'react-router-dom'
import {auth, signOut} from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import {CgProfile} from "react-icons/cg";

const NavBar = () => {

    const navigate = useNavigate();
    const user = useSelector(selectUser);
          
     
    const handleAuth = () => {
      if (user){
         signOut(auth).then( ()=> {
             navigate(`/signin`)
            
         }).catch((error)=> {
             alert(error.message);
         })
     }
     console.log(user)
 }


  return (
    <NavBarContainer>
      <Link to="/home" >
      <h1 className='text-red-600 text-6xl font-bold cursor-pointer'>NetFlix</h1>
      </Link>
      <div>
        {
         !user ?
          
         <button className='mr-2 border border-red-600 bg-red-600 px-6 text-sm  text-white py-1 rounded cursor-pointer'
                 onClick={ ()=>  navigate('/signin') } 
          >
              Sign In
          </button>
         :
         <>
          <SignOut>
             <img src={user.photoURL} alt="User" className="rounded-full w-[40px] height=[40px]" />
            <SignOutBox>
                <span onClick={handleAuth} className="" >Sign Out</span>
            </SignOutBox>
          </SignOut>
           <CgProfile className='absolute top-1.5 right-4 w-7 h-7 text-[#fff] cursor-pointer'
           onClick={ ()=>  navigate('/profile')  }
          />
         </>
        }
          
        
      </div>
    
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = tw.div`
  flex items-center justify-between fixed top-0 left-0 right-0 px-4  z-[100] w-full mt-6
`;

const SignOut = tw.div`
    flex absolute top-0 right-14 cursor-pointer group
`;
const SignOutBox = tw.div`
    absolute top-6 right-8 bg-[#E50914] text-white border-none 
    rounded-sm w-20 h-8 flex items-center justify-center text-base 
    opacity-0 group-hover:opacity-100 text-sm
`;  