import React from 'react';

const info = {
    items: [
        {
            ion_icon: "phone-portrait-outline",
            contact_title: "Phone",
            attr: "tel:+123 456 7890",
            value: "+234 906 160 3717",
        },
        {
            ion_icon: "mail-outline",
            contact_title: "Email",
            attr: "mailto:taiwot2002@gmail.com",
            value: "taiwot2002@gmail.com",
        },

    ]
}

const Info = () => {
  return (
    <div>
        <ul className="contact-list grid columns-1 gap-[16px]">
            {
                info.items.map(items => {
                    const {ion_icon, contact_title, attr, value} = items
                    return `
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name=${ion_icon}></ion-icon>
                            </div>
                            <div class="contact-info">
                                <p class="contact-title">${contact_title}</p>
                                <a href=${attr} class="contact-link">${value}</a>
                            </div>


                        </li>
                    `
                })
            }


            {/* <li class="contact-item">

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

            </li> */}
        </ul>
    </div>
  )
}

export default Info