import React from 'react'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './projects/Error'

const MainContent = () => {
    return (
        <div className='main-content mb-20'>
            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<About />} />
                    <Route path='resume' element={<Resume />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='*' element={<Error />} />

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default MainContent