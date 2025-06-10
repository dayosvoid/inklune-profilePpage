import React, { useEffect } from 'react'
import { useState } from 'react'
import AppLogo from '../assets/nav_icon/Frame 2.png'
import Searchbar from '../assets/nav_icon/stash_search-solid.png'
import WriteIcon from '../assets/nav_icon/hugeicons_quill-write-02.png'
import NotifyBell from '../assets/nav_icon/notification bell.png'
import ProfileImg from '../assets/image/Frame 3.png'
import { Menu,X,Bell } from 'lucide-react';
import NavMenu from './NavMenu'


const Nav = () => {
    // dropdown menu 
    const [menu,setMenu] = useState(false)
    const dropMenu = ()=>{
       setMenu(!menu)
    }
    // to stop screen from scrolling when dropdown shows
    useEffect(()=>{
     document.body.style.overflow = menu ? 'hidden' : 'auto';
    },[menu])
  return (
    <div className='backdrop-blur-lg border-b-2 border-gray-200 shadow-md fixed w-full z-3 lg:px-[100px] '>
        <div className='container mx-auto w-11/12 px-6 flex'>
            {/* the nav bar */}
            <nav className='w-full min-w-[300px] max-w-[1440px] flex justify-between items-center lg:py-[20px]  '>
                {/* left section */}
                <div className='flex gap-[24px] items-center'>
                    <span className='size-20 sm:w-[110px] md:w-[129px] flex items-center cursor-pointer'><img src={AppLogo} alt="logo" className='' /></span>

                    {/* the search bar */}
                    <div>
                        <form action="" className='hidden md:flex outline-2 outline-gray-300 gap-[4px] items-center py-[5px] pl-[20px] md:min-w-[250px] lg:h-[44px] lg:min-w-[380px] rounded-full inset-shadow-sm inset-shadow-gray-500/20'>
                            <button className=''><img src={Searchbar} alt="" className='size-[24px] cursor-pointer'/></button>
                            <input type="text" placeholder='Search Stories' id='search' className='outline-none text-gray-900 font-semibold' />
                        </form>
                    </div>
                </div>


                {/* right section */}
                <div className='relative'>
                
                    <div className='flex items-center md:hidden gap-[12px]'>

                        <button onClick={dropMenu}>
                        {menu?<X/>:<Menu/>}
                        </button>

                        <span>
                            <button><img src={ProfileImg} alt="" className='md:size-[40px] size-[35px]' /></button>
                        </span>
                        

                    </div>
                    {
                        menu && <div className=' absolute z-10 right-0 top-15 left-[-170px] md:hidden'><NavMenu/></div>
                    }

                    <div className='hidden md:flex gap-[28px] items-center'>
                        <span className='cursor-pointer'>
                            <button className='flex gap-1 cursor-pointer'> <img src={WriteIcon} alt="" className='size-[24px] inline'/> <p className='hover:font-bold'>Write</p> </button>
                        </span>

                        
                        <span className='w-[20%] cursor-pointer'>
                            <button className='flex cursor-pointer'><Bell className=''/></button>
                        </span>

                        <span>
                            <button className='cursor-pointer' ><img src={ProfileImg} alt="" className='size-[50px]' /></button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Nav