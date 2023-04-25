import React from 'react'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'

const MainContent = () => {
  return (
    <div className='main-content'>
        <About />
        <Resume />
        <Projects />
    </div>
  )
}

export default MainContent