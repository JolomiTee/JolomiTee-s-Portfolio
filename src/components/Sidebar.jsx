import React from 'react'
import ProfilePhoto from "../assets/images/ProfilePhoto.jpg"
import Info from './about/Info'
import SocialList from './about/SocialList'
import { useState } from 'react'

const Sidebar = () => {
    const [navOpen, setNavOpen] = useState(true)
    const toggleSideBar = () => {
        setNavOpen((prev) => !navOpen)
    }

  return (
    <aside className={`sidebar mb-4 overflow-hidden transition-2 ${navOpen ? 'max-h-[660px]' : 'max-h-[112px]'}`}>
        <div className="sidebar-info relative flex justify-start items-center gap-[15px]">
            <figure className="avatar-box bg-gradient-onyx rounded-2xl">
                <img src={ProfilePhoto} alt="Jolomi Taiwo" width="80" className='rounded-2xl'/>
            </figure>
            <div className="info-content">
                <h1 className="name text-white-2 text-fs-2 font-fw-500 text-center" title="Jolomi Taiwo">Jolomi Taiwo E.</h1>
                <p className="title text-white-1 bg-onyx text-fs-7 font-fw-300 w-full px-3 py-1 rounded-lg">Frontend Web Developer</p>
            </div>

            <button
                onClick={toggleSideBar}
                type="button"
                className="info-more-btn rounded-tr-[20px] rounded-bl-2xl absolute top-[-15px] right-[-15px] text-fs-7 text-orange-yellow-crayola bg-gradient-onyx p-3 shadow-2 transition-2 z-[1] before:absolute before:inset-[1px] before:rounded-inherit before:bg-gradient-jet before:transition-1 before:z-[1] hover:bg-gradient-yellow-1 focus:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:before:bg-gradient-yellow-2"
                data-sidebar-btn
            >
                <span className='hidden'>Show Contacts</span>
                <ion-icon name={navOpen ? 'chevron-up' : 'chevron-down'}></ion-icon>
            </button>
        </div>

        <div className={`sidebar-info_more transition-2 ${navOpen? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

            <div className="separator"></div>

            <Info />

            <div className="separator"></div>

            <SocialList />

        </div>
    </aside>
  )
}

export default Sidebar