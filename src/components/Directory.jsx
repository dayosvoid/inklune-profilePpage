import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'

const Directory = ({sortData}) => {
  const [button,setButton] = useState(true)
  // const [button2,setButton2] = useState(false)
  const yourButtons=()=>{
    setButton(true)}

  const LikedButtons=()=>{
    setButton(false)}


  // to toggle color for latest and popular and also carry out the function
    const [button2,setButton2] = useState(false)

    const popularButton=(callback)=>{
    setButton2(true);
    sortData()
    }

    

    const lastestButton=()=>{
    setButton2(false)}

    
    
  


  return (
    <div>
        <div className='flex justify-between text-[16px] px-2  '>
            {/* left  */}
            <div className='flex gap-[16px] '>
              <Link to='/'>
                <button onClick={yourButtons} ><h2 style={{color: button ? 'hsl(256,90%,68%)' : 'black' }} className='font-medium hover:font-bold cursor-pointer'>Your blogs</h2></button>
              </Link>

              <Link to='/likedblog'>
                 <button onClick={LikedButtons}><h2 style={{color: button ? 'black' : 'hsl(256,90%,68%)' }} className='font-medium  hover:font-bold cursor-pointer'>Liked blogs</h2></button>
              </Link>
            </div>
            {/* right */}
            <div className='flex gap-[16px] '>
              <button onClick={lastestButton}><h2 style={{color: button2 ? 'black' : 'hsl(256,90%,68%)' }}   className='font-medium hover:font-bold cursor-pointer '>Latest</h2></button>
              <button onClick={popularButton}><h2 style={{color: button2 ? 'hsl(256,90%,68%)' : 'black' }}   className='font-medium hover:font-bold cursor-pointer'>Popular</h2></button>
            </div>
        </div>
    </div>
  )
}

export default Directory