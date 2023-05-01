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
        <aside
            className={`sidebar mb-4 overflow-hidden transition-2 md:mb-[20px]  whitespace-nowrap 2xl:min-w-[25%] ${navOpen ? 'max-h-[660px]' : 'max-h-[112px]'} lg:shadow-5`}>

            <div className="sidebar-info relative flex justify-start items-center gap-[15px] md:gap-[25px] 2xl:flex-col">

                <figure className="avatar-box bg-gradient-onyx rounded-2xl">
                    <img src={ProfilePhoto} alt="Jolomi Taiwo" width="80" className='rounded-2xl md:w-[100px] 2xl:w-[120px] ' />
                </figure>
                <div className="info-content">
                    <h1 className="name text-white-2 text-fs-2 font-fw-500 text-center md:mb-3 md:text-[20px]" title="Jolomi Taiwo">Jolomi Taiwo E.</h1>
                    <p className="title text-white-1 bg-onyx text-fs-7 font-fw-300 w-full px-3 py-1 rounded-lg md:px-5 md:py-2">Frontend Web Developer</p>
                </div>

                <button
                    onClick={toggleSideBar}
                    type="button"
                    className="info-more-btn rounded-tr-[20px] rounded-bl-2xl absolute top-[-15px] right-[-15px] text-fs-7 text-orange-yellow-crayola bg-gradient-onyx p-3 shadow-2 transition-2 z-[1] before:absolute before:inset-[1px] before:rounded-inherit before:bg-gradient-jet before:transition-1 before:z-[1] hover:bg-gradient-yellow-1 focus:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:before:bg-gradient-yellow-2 md:top-[-30px] md:right-[-30px] 2xl:hidden"
                    data-sidebar-btn
                >
                    <span className='hidden md:block md:text-fs-6'>Show Contacts</span>
                    <ion-icon name={navOpen ? 'chevron-up' : 'chevron-down'}></ion-icon>
                </button>
            </div>

            <div className={`sidebar-info_more transition-2 2xl:opacity-100 2xl:visible ${navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className="separator md:my-6"></div>

                <Info />

                <div className="separator md:my-6"></div>

                <SocialList />

            </div>
        </aside>
    )
}

export default Sidebar