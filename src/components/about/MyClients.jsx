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

        <ul className="client-list has-scrollbar flex justify-start items-start gap-5 my-0 mx-[-15px] p-6 overflow-x-auto scroll-smooth overscroll-contain snap-mandatory scroll-p-6">
            {
                info.map((items, index) => (
                    <li key={index} className="client-items min-h-[50%] snap-start">
                        <a href={items.link} target="_blank" title={items.name} rel='noopener'>
                            <img src={items.img} alt={items.name} width="150" className='rounded-[15px]'/>
                        </a>
                    </li>
                ))
            }
        </ul>

        <article className="text-white-1">
            Next, you can check out my Resume
        </article>
    </section>
  )
}

export default MyClients