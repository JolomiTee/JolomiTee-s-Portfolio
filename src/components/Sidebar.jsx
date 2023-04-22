import React from 'react'
import ProfilePhoto from "../assets/images/ProfilePhoto.jpg"
import Info from './subcomponents/Info'

const Sidebar = () => {
  return (
    <aside className="sidebar active" data-sidebar>
        <div className="sidebar-info relative flex justify-start items-center gap-[15px]">
            <figure className="avatar-box bg-gradient-onyx rounded-2xl">
                <img src={ProfilePhoto} alt="Jolomi Taiwo" width="80" className='rounded-2xl'/>
            </figure>
            <div className="info-content">
                <h1 className="name text-white-2 text-fs-2 font-fw-500 text-center" title="Jolomi Taiwo">Jolomi Taiwo E.</h1>
                <p className="title text-white-1 bg-onyx text-fs-5 font-fw-300 w-full px-3 py-1 rounded-lg">Frontend Web Developer</p>
            </div>

            <button
                type="button"
                className="info-more-btn rounded-tr-[20px] rounded-bl-2xl absolute top-[-15px] right-[-15px] text-fs-7 text-orange-yellow-crayola bg-gradient-onyx p-3 shadow-2 transition-2 z-[1] before:absolute before:inset-[1px] before:rounded-inherit before:bg-gradient-jet before:transition-1 before:z-[1] hover:bg-gradient-yellow-1 focus:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:before:bg-gradient-yellow-2"
                data-sidebar-btn
            >
                <span className='hidden'>Show Contacts</span>
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        </div>

        <div className="sidebar-info_more">

            <div className="separator"></div>

            <Info />

            <div className="separator"></div>

            <ul className="social-list">

                <li className="social-item">
                    <a href="https://github.com/JolomiTee" target="_blank" className="social-link">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://www.linkedin.com/in/jolomitee1029" target="_blank" className="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://twitter.com/truff_lazy?t=jbp7A_YA_lehGhDZcKhOCw&s=09" target="_blank" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://www.instagram.com/jolomi_t.e/" target="_blank" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
            </ul>

        </div>
    </aside>
  )
}

export default Sidebar