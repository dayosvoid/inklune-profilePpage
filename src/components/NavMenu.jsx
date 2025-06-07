import React from 'react'
import { User,Bell,SquarePen, Search, Settings, Home, User2,LogOut } from 'lucide-react';
import Searchbar from '../assets/nav_icon/stash_search-solid.png'



const NavMenu = () => {
  return (
    
    <div className='bg-[hsl(256,90%,68%)] backdrop-blur-sm z-100 w-[300px]  px-5 py-10 h-[300vh] text-gray-400 space-x-4 flex flex-col gap-5 rounded-b-lg '>
          <div>
              <form action="" className='flex outline-3 outline-gray-300 gap-[4px] items-center py-[5px] pl-[20px] md:min-w-[250px] lg:h-[44px] lg:min-w-[380px] rounded-full inset-shadow-sm inset-shadow-gray-500/20'>
                  <button className=''><img src={Searchbar} alt="" className='size-[24px] cursor-pointer'/></button>
                  <input type="text" placeholder='Search Stories' id='search' className='outline-none font-semibold placeholder:font-semibold placeholder:text-gray-600' />
              </form>
          </div>
          <ul className=' flex flex-col items-center text-center gap-4 pr-4 text-md font-semibold text-xl text-gray-700'>
                <li className='hover:font-bold font-semibold hover:underline w-full place-content-center place-items-center'><span className='flex gap-2 w-[40%] justify-between'><Home/><p className=''>Home</p></span></li>
                <li className='hover:font-bold hover:underline w-full place-content-center place-items-center'><span className='flex gap-2 w-[40%] justify-between'><User2/><p>Profile</p></span></li>
                <li className='hover:font-bold hover:underline w-full place-content-center place-items-center'><span className='flex gap-2 w-[40%] justify-between'><SquarePen/><p>Write</p></span></li>
                <li className='hover:font-bold hover:underline w-full place-content-center place-items-center'><span className='flex gap-1 w-[60%] justify-between'><Bell/><p>Notification</p></span></li>
                <div className='border-b border-white border-1 w-full'></div>
                <li className='hover:font-bold hover:underline w-full place-content-center place-items-center'><span className='flex gap-1 w-[45%] justify-between'><Settings/><p>Settings</p></span></li>
                <li className='hover:text-red-500 hover:font-bold hover:underline w-full place-content-center place-items-center text-nowrap'><span className='flex gap-2 w-[45%] justify-between'><LogOut/><p>Log out</p></span></li>
          </ul>
      </div>
  )
}

export default NavMenu