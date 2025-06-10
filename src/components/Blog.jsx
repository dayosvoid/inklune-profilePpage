import React from 'react'
import Api from './api'
import { useState,useEffect } from 'react'
import YourBlog from './YourBlog'
import Directory from './Directory'
import { useContext } from 'react'
import SortFunction from '../context/SortFunction'


const Blog = () => {
    const {runPopular}=useContext(SortFunction)
    const [datas,setData] = useState(Api)
   
    console.log(datas)
    
  //  to delete each blog
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
      <div className='flex flex-col gap-[16px] p-2'>
            {
            datas.map((data)=>{
            return(
            <YourBlog key={data.id} {...data} remove={removeBlog}/>
          )})
        }
      </div>
   </div>
  )
}

export default Blog