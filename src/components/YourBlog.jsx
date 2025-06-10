import React from 'react'
import heart from '../assets/blogs icon/majesticons_heart-line.svg'
import { Bookmark, BookmarkCheck, Heart } from 'lucide-react'
import comments from '../assets/blogs icon/ic_outline-message.svg'
import save from '../assets/blogs icon/stash_save-ribbon-light.svg'
import meatball from '../assets/blogs icon/quill_meatballs-h.svg'
import Menu from './Menu'
import { useState } from 'react'
import { useContext } from 'react'
import EditBioContext from '../context/EditBioContext'


const YourBlog = ({name,id,title,text,date,comment,likes,postedImg,img,remove}) => {
    //half of the menu function cont(line 63)
    const [menu,setMenu] = useState(false)

    const showMenu=()=>{
        setMenu(!menu)  
    }

    // function to like
    const [liked,setLiked] = useState(false)
    const [count, setCount] = useState(likes)

    const likePost =()=>{
        setLiked(!liked)
        if(!liked){
            return(
            setCount(likes+1)
            )
        }else{setCount(likes)}
    }
    // function to save
    const [save, setSave] = useState(false)

    const togglesaved=()=>{
        setSave(!save)
    }

     // importing  from useContext to change name on the yourblog
    const {fixUsername} = useContext(EditBioContext)

  return (
    <div className='bg-white flex py-10 pr-10 pl-5 border-b-1 border-[hsla(0,0%,73%,1)]'>
        <div  className='flex flex-col gap-[16px]'>
            {/* header */}
            <div className='flex gap-[16px] items-center'>
                <span className='size-10'><img src={img} alt="profile img" /></span>
                <h2 className=' font-medium text-5'>{fixUsername}</h2>
            </div>
            {/* the text and image section */}
            <div className='flex gap-[48px] items-center h-[116px]'>
                <div className='flex flex-col gap-8px '>
                    <span className='w-[450px]'>
                        <h3 className='font-extrabold text-5 leading-[30px]  text-[hsla(0,0%,20%,1)]'>{title}</h3>
                    </span>
                    
                    <p className='text-4 font-normal text-[hsla(0,0%,47%,1)]'>{text}</p>
                </div>
                <div className='size-full flex justify-end '>
                <span className='size-[116px]'><img src={postedImg} alt="post photo" className='' /></span>
                </div>
            </div>
            {/* the likes and comment section  */}
            <div className='flex justify-between w-[526px]'>
                {/* left */}
                <div className='flex gap-[16px]'>
                    <p className='font-normal text-[14px] text-[hsla(0,0%,64%,1)]'>{date}</p>
                    <span className='flex items-center text-[12px] gap-1 font-normal cursor-pointer'><button onClick={likePost}><Heart className='cursor-pointer' style={{fill: liked ? 'red' : '',     color: liked? 'red' : ''}} /></button><p className='inline'>{count}</p></span>
                    <span className='flex items-center text-[12px] gap-1 font-normal'><button><img src={comments} alt="" /></button>{comment}</span>
                </div>
                {/* right */}
                <div className='flex gap-4 relative '>
                    <button onClick={togglesaved} className='cursor-pointer text-gray-400'>{<Bookmark style={{fill:save?'black':'white', color:save?'black':'gray'}}/>}</button>
                    {save && <span className='absolute right-[35px] text-[12px]  bottom-[-15px] font-semibold text-[hsla(0,0%,64%,1)]'>saved</span>}
                    <button  className='cursor-pointer' onClick={showMenu}><img src={meatball} alt="" className='' /></button> 

                    <div className='absolute right-[-100px] top-[-100px] '>{ menu && <Menu remove={remove} id={id} />} </div> 

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default YourBlog