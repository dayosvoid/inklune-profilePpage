import React from 'react'
import { User,Bell,SquarePen, Search, Settings, Home, User2,LogOut } from 'lucide-react';
import Searchbar from '../assets/nav_icon/stash_search-solid.png'



const NavMenu = () => {
  return (
    
<div className=' z-100 min-w-full bg-white px-5 py-[30px] flex justify-center items-center'>
          {/* <div>
              <form action="" className='flex outline-3 outline-gray-300 gap-[4px] items-center py-[5px] pl-[20px] w-full rounded-full inset-shadow-sm inset-shadow-gray-500/20'>
                  <button className=''><img src={Searchbar} alt="" className='size-[24px] cursor-pointer'/></button>
                  <input type="text" placeholder='Search Stories' id='search' className='outline-none font-semibold placeholder:font-semibold placeholder:text-gray-600' />
              </form>
          </div> */}
          <ul className=' flex w-full flex-col items-center text-center gap-[32px] text-[18px] font-normal text-gray-700'>
                <li className='hover:font-bold hover:underline w-full'><span className=''>Write</span></li>
                <li className='hover:font-bold hover:underline w-full'><span className=''>Profile</span></li>
                <li className='hover:font-bold hover:underline w-full '><span className=''>Stories</span></li>
                <li className='hover:font-bold hover:underline w-full '><span className=''>Community</span></li>
                <div className='border-b my-[10px] border-gray-400 border-1 w-full'></div>
                <li className='hover:font-bold hover:underline w-full'><span className=''>Settings</span></li>
                <li className='hover:text-red-500 hover:font-bold  hover:underline min-w-full border-4 border-[hsla(256,90%,68%,1)] py-1 rounded-lg'><span className='text-[23px] font-[500]'><button>Log Out</button></span></li>
          </ul>
      </div>
  )
}

export default NavMenu