import React, { useState } from 'react'
import cancel from '../assets/blogs icon/cancel.svg'
import image from '../assets/image/profile_picture.png'
import addimg from '../assets/blogs icon/image.svg'
import { useContext } from 'react'
import EditBioContext from '../context/EditBioContext'

const EditBio = ({remove}) => {
  const { setFixUsername,setbioname} = useContext(EditBioContext)
  const [username,setUsername]=useState({name:'', bio:''})
   
  // the function that send the name change to the use context(stored in the save button)
 const changeUsername = (e)=>{
  if (username.name.trim( )== '' || username.name.trim() == '' ){
    e.preventDefault();
    console.log('no changes would be made')
    remove()
  }
  else{
    e.preventDefault();
    remove();
    setFixUsername(username.name)
    setbioname(username.bio)
    console.log(username)}
    // console.log({...fixUsername})
  }

  return (
      <div className='bg-white w-11/12 max-w-[730px] flex flex-col gap-[10px] px-6 py-3 rounded-[12px] border-1 border-[hsla(0,0%,94%,1)]  shadow-md/20'>
           {/* edit profile */}
        <div className='flex justify-between'>
          <p>Edit profile</p>
          <button className='cursor-pointer ' onClick={remove}><span ><img src={cancel} alt="" className='hover:bg-red-300 rounded-lg' /></span></button>
        </div>

          {/* profile img */}
        <div className='relative'>
          <span>
            <img src={image} alt="" />
          </span>
           <span className='absolute top-16 left-17 cursor-pointer'><img src={addimg} alt="" /></span>
        </div>
          {/* form  */}
        <div className=''>
          <form action="" className='flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-[6px] text-[16px] font-medium'>Display Name
              <input value={username.name} onChange={(e)=>setUsername({...username, name:e.target.value})} type="text" placeholder='Name' className='border-1 border-gray-300 py-3 px-4 rounded-[10px] ootline-none' />
            </label>

            <label htmlFor="" className='flex flex-col gap-[6px] text-[16px] font-medium'>Bio
              <input value={username.bio} onChange={(e)=>setUsername({...username, bio:e.target.value})} type="text" placeholder='What on your mind' className='border-1 border-gray-300 pr-[39px] pl-4 py-3 rounded-[10px] '/>
            </label>

             <span className='w-full flex justify-end'>
                <button onClick={changeUsername} className='px-7 py-[3px] text-white bg-[#9472f0] hover:bg-[hsla(256,100%,68%,1)] rounded-[10px] cursor-pointer hover:font-bold'>Save</button>
             </span> 
          </form>
        </div>
      </div>
  )
}

export default EditBio