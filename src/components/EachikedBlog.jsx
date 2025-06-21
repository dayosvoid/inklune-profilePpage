import React from 'react'
import comments from '../assets/blogs icon/ic_outline-message.svg'
import meatball from '../assets/blogs icon/quill_meatballs-h.svg'
import moon from '../assets/blogs icon/iconamoon_sign-minus-circle-thin.svg'
import Menu from './Menu'
import { Bookmark, BookmarkCheck, Heart } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'

const EachikedBlog = ({name,id,title,text,date,comment,likes,postedImg,img,remove}) => {
    const [menu,setMenu] = useState(false)
        const showMenu=()=>{
            setMenu(!menu)  
        }

         // function to like,unlike,delete and show a messsage while removing
            const [liked,setLiked] = useState(true)
            const [count, setCount] = useState(likes)
            // let [newSecond,setNewSecond] = useState()
            // let [second, setSecond] = useState(5)


            const likePost = () => {
            setLiked(!liked);
        };

        useEffect(() => {
            let timeoutId;
            let intervalId;

            if (!liked) { 
                // intervalId = setInterval(() => {
                //     newSec = second--;
                //     setSecond(newSec)
                // }, 1000);
            timeoutId = setTimeout(() => {
                remove(id);
                console.log(12345);
            }, 3000);
            }
                return () => {
                 // clearInterval(intervalId);
                clearTimeout(timeoutId);
                };
            }, [liked, id, remove]);

            // function to save
            const [save, setSave] = useState(false)
        
            const togglesaved=()=>{
                setSave(!save)
            }
        
        
  return (
           <div className='bg-white flex py-5  md:py-10 px-3   md:pr-10 md:pl-5 border-b-1 border-[hsla(0,0%,73%,1)]'>
        <div  className='flex flex-col gap-[35px] md:gap-[15px] w-full'>
            {/* header */}
            <div className='flex gap-[16px] items-center'>
                <span className='size-10'><img src={img} alt="profile img" /></span>
                <h2 className=' font-medium text-5'>{name}</h2>
            </div>
            {/* the text and image section */}
            <div className='flex justify-between items-center h-[116px]'>
                <div className='flex flex-col gap-8px '>
                    <span className='w-full md:w-[450px]'>
                        <h3 className='font-extrabold text-5 leading-[30px]  text-[hsla(0,0%,20%,1)]'>{title}</h3>
                    </span>
                    
                     <span className='w-full'>
                      <p className='text-2 md:text-4 font-medium text-pretty md:font-normal text-[hsla(0,0%,47%,1)]'>{text}</p>  
                    </span>
                </div>
                <div className='size-full flex justify-end items-center'>
                <span className='size-[70px] md:size-[116px]'><img src={postedImg} alt="post photo" className='' /></span>
                </div>
            </div>
            {/* the likes and comment section  */}
            <div className='flex pt-2 justify-between w-full  md:w-[526px]'>
                {/* left */}
                <div className='flex gap-[16px]'>
                    <p className='font-normal text-[14px] text-[hsla(0,0%,64%,1)]'>{date}</p>
                    <span className='flex items-center text-[10px]  md:text-[12px] gap-1 text-[hsla(0,0%,56%,1)] font-normal'><button onClick={likePost}><Heart style={{fill: liked ? 'red' : 'white', color: liked? 'red' : 'black'}} className='cursor-pointer'/></button><p className='inline'>{count}</p></span>
                    <span className='flex items-center text-[10px]  md:text-[12px] gap-1 text-[hsla(0,0%,56%,1)] font-normal'><button><img src={comments} alt="" /></button>{comment}</span>
                </div>
                {/* right */}
                <div className='flex gap-4 relative '>
                    <button><img src={moon} alt="" /></button>
                    <button onClick={togglesaved} className='cursor-pointer text-gray-400'>{<Bookmark style={{fill:save?'black':'white', color:save?'black':'gray'}} />}</button>
                    {save && <span className='absolute right-[35px] text-[12px]  bottom-[-15px] font-semibold text-[hsla(0,0%,64%,1)]'>saved</span>}
                    <button className='cursor-pointer' onClick={showMenu}><img src={meatball} alt="" /></button> 

                    <div className='absolute left-[-60px]  top-[-100px] '>{ menu && <Menu remove={remove} id={id} />} </div> 

                </div>
            </div>
        </div>
            {!liked && <span className='text-[12px] text-gray-500 absolute bottom-2'>Removing...</span>}
    </div>
  )
}

export default EachikedBlog