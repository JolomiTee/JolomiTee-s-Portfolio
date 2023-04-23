import React from 'react'

const links = ["About", "Resume", "Projects"]

const Navbar = () => {
  return (
    <nav className='navbar fixed bottom-0 left-0 w-full bg-gradient-onyx rounded-tl-xl rounded-tr-xl shadow-2 z-[5] bg-navbar backdrop-blur-navbar'>
        <ul className='navbar-list flex flex-wrap justify-center items-center py-1 px-3'>
            {
                links.map((link, index) => (
                    <li key={index} className='navbar-item text-light-gray text-fs-7 py-5 px-3 transition-1'>
                        <button className="navbar-link hover:text-light-gray-70 focus:text-light-gray-70">
                            {link}
                        </button>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar