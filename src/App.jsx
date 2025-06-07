import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Nav from './components/Nav'
import Profile from './components/Profile';
import Blog from './components/Blog'
import Likedblog from './components/Likedblog';
import EditBio from './components/EditBio';

function App() {
  // to make the edit bio pop up
      const [editpage, setEditPage] = useState(false)

      const showEditBio=()=>{
      setEditPage(!editpage)
       }

       useEffect(()=>{
            document.body.style.overflow = editpage ? 'hidden' : 'auto';
            document.body.style.height = editpage ? '100dvh' : 'auto';
        },[editpage])
     
     
  return (
    < >
      <Nav/>
      <Router>
        
      <div className='new container mx-auto relative top-[130px] flex flex-col gap-[42px] w-[736.5px]'>
           {editpage && <div className='z-10 absolute h-2000 top-[-10px] sm:top-[-130px] lg:top-0 backdrop-blur-xs'><div className='mt-2 w-[736.5px] flex justify-center '><EditBio remove={showEditBio}/> </div></div>}
        <Profile ShowEditPage={showEditBio} />
        <Routes>
          <Route path='/' element={<Blog/>}/>
          {/* <Route {<YourBlog/>}/> */}
          <Route path='/likedblog' element={<Likedblog/>}/>
        </Routes>
      </div>

      </Router>

       
    </>
  )
}

export default App
