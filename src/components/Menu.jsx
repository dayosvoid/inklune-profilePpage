import React,{useState} from 'react'
import { Trash2,Share2,PencilLine, Delete } from 'lucide-react';
import Share from './Share';


const Menu = ({remove,id}) => {

      // function to share
    const [share,setShare] = useState(false)

    const toggleShare=()=>{
        setShare(!share) 
    }
  return (
    <div className='relative bg-white shadow-md rounded-2xl '>
        <ul className='font-semibold text-gray-500  bg-white shadow-md text-[14px] py-3 rounded-2xl'>
            <li className='flex gap-2 py-2 hover:bg-purple-200 px-3 '><span><PencilLine/></span>Edit</li>
            <li onClick={toggleShare} className='flex gap-2 py-2 hover:bg-purple-200 px-3 cursor-pointer'><span><Share2/></span>Share</li>
            {/* the share function */}
            <span className='absolute top-[55px] left-[-160px]'>{share && <Share/>}</span>
            <li onClick={()=>remove(id)} className='flex gap-2 py-2 hover:bg-purple-200 px-3 cursor-pointer'><span><Trash2/></span>Delete</li>
        </ul>
    </div>
  )
}

export default Menu