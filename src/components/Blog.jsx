import React from 'react'
import Api from './api'
import { useState } from 'react'
import YourBlog from './YourBlog'
import Directory from './Directory'


const Blog = () => {
    const [datas,setData] = useState(Api)
    const [sort, setSort] = useState(true)
   
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
    setSort(!sort)
  if(sort){
  const sorted = [...datas].sort((a,b)=> b.likes - a.likes)
    setData(sorted)
    console.log(sorted)}
  }
  return (
    <div>
      <span><Directory sortData={sortData} /></span>
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