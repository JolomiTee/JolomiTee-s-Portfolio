import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Error from './components/Error'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <div className="App mb-20 md:mt-[60px] md:mb-24">

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
