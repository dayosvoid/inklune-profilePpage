import React from 'react'
import { useState,useEffect } from 'react'
import Api from './api'
import EachikedBlog from './EachikedBlog'
import { useContext } from 'react'
import SortFunction from '../context/SortFunction'

const Likedblog = () => {
  const {runPopular}=useContext(SortFunction)
    const [datas,setData] = useState(Api)
    

    // removing each blog when delete is click
   const removeBlog=(id)=>{
   const newBlogList = datas.filter((data)=>data.id !== id)
   console.log(12345)
   return(setData(newBlogList))
   }
   
   // to sort the blog based of likes(popuplar)
  const sortData=()=>{
   console.log(12345)
   const sorted = [...datas].sort((a,b)=> b.likes - a.likes)
    setData(sorted)
    console.log(sorted)}
  
    useEffect(() => {
        if (runPopular) {
            sortData();
        }
    }, [runPopular])
    
  return (
    <div>
      <span><Directory sortData={sortData} /></span>
      <div className='flex flex-col gap-[16px] p-2'>
        
              {
              datas.map((data)=>{
              return(
              <EachikedBlog key={data.id} {...data} remove={removeBlog}/>
            )})
          }
        </div>
    </div>    
  )
}

export default Likedblog