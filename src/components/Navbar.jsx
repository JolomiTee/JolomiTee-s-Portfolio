import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {
        route: "About",
        link: '/',
    },
    {
        route: "Resume",
        link: 'resume',
    },
    {
        route: "Projects",
        link: 'projects',
    },
]


const Navbar = () => {
  return (
    <nav className='navbar fixed bottom-0 left-0 w-full bg-gradient-onyx rounded-tl-xl rounded-tr-xl shadow-2 z-[5] bg-navbar backdrop-blur-navbar md:rounded-tl-[20px] md:rounded-tr-[20px]'>
        <ul className='navbar-list flex flex-wrap justify-center items-center py-1 px-3 md:gap-5'>
            {
                links.map((link, index) => (
                    <li key={index} className='navbar-item text-fs-7 py-5 px-3 transition-1'>
                        <NavLink
                            to={link.link}
                            className={({ isActive }) => (isActive ? 'text-orange-yellow-crayola' : 'navbar-link text-white-1 hover:text-light-gray-70 md:text-fs-6')}
                        >
                            {link.route}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar