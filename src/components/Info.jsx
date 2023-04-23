import React from 'react';

const info = {
    items: [
        {
            ion_icon: "mail-outline",
            contact_title: "Email",
            attr: "mailto:taiwot2002@gmail.com",
            value: "taiwot2002@gmail.com",
        },
        {
            ion_icon: "phone-portrait-outline",
            contact_title: "Phone",
            attr: "tel:+123 456 7890",
            value: "+234 906 160 3717",
        },
        {
            ion_icon: "calendar-outline",
            contact_title: "Birthday",
            element: "time",
            datetime: "2002-03-04",
            value: "March 4, 2002"
        },
        {
            ion_icon: "location-outline",
            contact_title: "Location",
            element: "address",
            value: "Kado Estate, Abuja, Nigeria"
        },

    ]
}

const Info = () => {
  return (
    <div>
        <ul className="contact-list grid columns-1 gap-[16px]">
            {
                info.items.map((items, index) =>
                (
                    <li key={index} className="contact-item min-h-full flex items-center gap-4">
                        <div className="icon-box">
                            <ion-icon name={items.ion_icon}></ion-icon>
                        </div>
                        <div className="contact-info text-start">
                            <p className="contact-title text-light-gray-70 text-fs-8 uppercase mb-[2px]">{items.contact_title}</p>
                            {
                                items.element === "time"
                                ?
                                <time dateTime={items.datetime} >{items.value}</time>
                                :
                                items.element === "address"
                                ?
                                <address>{items.value}</address>
                                :
                                <a href={items.attr} class="contact-link">{items.value}</a>
                            }
                        </div>
                    </li>
                ))
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