import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Error from './components/Error'

function App() {

  return (
    <div className="App mb-20">
        <Sidebar />
        <Navbar />
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

export default App
