import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Error from './components/Error'
import ScrollToTop from './components/ScrollToTop'

function App() {

   return (
      <div className="App mb-16 md:mt-[10px] md:mb-20 lg:relative lg:w-max lg:m-auto lg:mb-[70px] 2xl:max-w-[1200px] 2xl:min-w-[95%] 2xl:flex 2xl:justify-center 2xl:items-start 2xl:gap-6">

         <BrowserRouter>
            <ScrollToTop />

            <Routes>

               <Route path='/' element={<Home />}>

                  <Route index element={<About />} />
                  <Route path='resume' element={<Resume />} />
                  <Route path='projects' element={<Projects />} />
                  <Route path='*' element={<Error />} />

               </Route>

               <Route path='*' element={<Error />} />

            </Routes>

         </BrowserRouter>

      </div>
   )
}

export default App
