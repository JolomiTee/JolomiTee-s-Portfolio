import React from 'react'
import GreenBarter from "../../assets/images/Greenbarter.png"
import Hubbab from "../../assets/images/Hubbab Company.png"
import Revinance from "../../assets/images/Revinance.png"
const info = [
    {
        link: "https://greenbarter.co",
        name: "Greenbarter Exchange",
        img: GreenBarter,
    },
    {
        link: "https://revinance.com",
        name: "Revinance",
        img: Revinance,
    },
    {
        link: "https://hubbab.com",
        name: "Hubbab & Associates",
        img: Hubbab,
    },
]

const MyClients = () => {
  return (
    <section className="clients mb-4">
        <h3 className="h3 clients-title flex gap-1">I <span className='lowercase'>have worked as a developer at</span></h3>
        {/* overflow-x-auto scroll-smooth overscroll-contain snap-mandatory scroll-p-6 md:gap-10 md:my-0 md:mx-[-30px] md:p-11 md:scroll-ps-[45x] */}

        <ul className="client-list has-scrollbar flex justify-center items-start gap-5 my-0 mx-[-15px] p-6 flex-wrap md:my-0 md:mx-[-30px] md:p-11">
            {
                info.map((items, index) => (
                    <li key={index} className="client-items min-h-[50%] snap-start">
                        <a href={items.link} target="_blank" title={items.name} rel='noopener'>
                            <img src={items.img} alt={items.name}  className='rounded-[15px] w-[100px]'/>
                        </a>
                    </li>
                ))
            }
        </ul>

    </section>
  )
}

export default MyClients