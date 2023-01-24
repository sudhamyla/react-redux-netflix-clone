import React from 'react'
import tw from "tailwind-styled-components"
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Profile = () => {
    const user = useSelector(selectUser);
  return (
    <>
    <NavBar/>
    <ProfilePage>
  
  <ProfileContainer>
   <div className='flex flex-col gap-4'>
   <span className='text-xl sm:text-2xl'>EditProfile</span>
     <div className='flex bg-gray-600 w-[350px] sm:w-[600px] h-[30px] items-center flex-start pl-4'>
         <span className='text-sm'>{user.email}</span>
     </div>
     <span className='text-sm'>Plans (Current Paln: Premium)</span>
     <span className='text-sm'>Next Renewal On: 11/11/2023</span>
    </div>
 
    <Plans>
       <div className='flex flex-col gap-1'>
         <span  className='text-sm'>Netflix Mobile</span>
         <span  className='text-sm'>480p</span>
       </div>
       <button className='mr-2 border border-red-600 bg-red-600 px-6 text-sm  text-white py-1 cursor-pointer'
              onClick={ ()=>  {} } 
       >
           Subscribe
       </button>
     
       <div className='flex flex-col gap-1'>
         <span  className='text-sm'>Netflix Basic</span>
         <span  className='text-sm'>720p</span>
       </div>
       <button className='mr-2 border border-red-600 bg-red-600 px-6 text-sm  text-white py-1 cursor-pointer'
              onClick={ ()=>  {} } 
       >
           Subscribe
       </button>

       <div className='flex flex-col gap-1'>
         <span  className='text-sm'>Netflix Standard</span>
         <span  className='text-sm'>1080p</span>
       </div>
       <button className='mr-2 border border-red-600 bg-red-600 px-6 text-sm  text-white py-1 cursor-pointer'
              onClick={ ()=>  {} } 
       >
           Subscribe
       </button>

       <div className='flex flex-col gap-1'>
         <span  className='text-sm'>Netflix Premium</span>
         <span  className='text-sm'>4K+HDR</span>
       </div>
       <button className='mr-2 border-none  bg-gray-600 px-6 text-sm  text-white py-1 cursor-pointer'
              onClick={ ()=>  {} } 
       >
           Current Package
       </button>

    </Plans>
   </ProfileContainer>
 </ProfilePage>
 
</>
)
}

export default Profile

const ProfilePage = tw.div`
h-screen w-full  flex justify-center 
`;

const ProfileContainer = tw.div`
absolute top-32 flex flex-col flex-start 
`;

const Plans = tw.div`
mt-10 mb-10  grid grid-cols-2 gap-8
`;