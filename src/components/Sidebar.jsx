import React from 'react'

const Sidebar = () => {
  return (
    <aside class="sidebar active" data-sidebar>
            <div class="sidebar-info">
                <figure class="avatar-box">
                    <img src="./assets/images/me.jpg" alt="Jolomi Taiwo" width="80"/>
                </figure>
                <div class="info-content">
                    <h1 class="name" title="Jolomi Taiwo">Jolomi Taiwo E.</h1>
                    <p class="title">Web Designer</p>
                </div>

                <button type="button" class="info-more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div class="sidebar-info_more">

                <div class="separator"></div>

                <ul class="contact-list">

                    <li class="contact-item">

                        <div class="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Email</p>
                            <a href="mailto:taiwot2002@gmail.com" class="contact-link">taiwot2002@gmail.com</a>
                        </div>

                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>
                        <div class="contact-info">
                            <p class="contact-title">Phone</p>
                            <a href="tel:+123 456 7890" class="contact-link">+234 906 160 3717</a>
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="calendar-outline"></ion-icon>
                        </div>
                        <div class="contact-info">
                            <p class="contact-title">Birthday</p>
                            <time datetime="2002-03-04">March 4, 2002</time>
                        </div>
                    </li>

                    <li class="contact-item">

                        <div class="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Location</p>
                            <address>Kado Estate, Abuja, Nigeria</address>
                        </div>

                    </li>
                </ul>

                <div class="separator"></div>

                <ul class="social-list">

                    <li class="social-item">
                        <a href="https://github.com/JolomiTee" target="_blank" class="social-link">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </li>
                    <li class="social-item">
                        <a href="https://www.linkedin.com/in/jolomitee1029" target="_blank" class="social-link">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                    <li class="social-item">
                        <a href="https://twitter.com/truff_lazy?t=jbp7A_YA_lehGhDZcKhOCw&s=09" target="_blank" class="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li class="social-item">
                        <a href="https://www.instagram.com/jolomi_t.e/" target="_blank" class="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>

            </div>
        </aside>
  )
}

export default Sidebar