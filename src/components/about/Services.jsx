import React from 'react'
import DesignIcon from '../../assets/icons/icon-design.svg'
import IconDev from '../../assets/icons/icon-dev.svg'

const info = [
    {
        img: DesignIcon,
        alt: 'Design icon',
        title: 'Web Design and Development',
        text: 'I offer very modern and high-quality designs, made to your taste. Also I deliver with efficiency and packed with inborn ideas that will blow your clients away!',
    },
    {
        img: IconDev,
        alt: 'Development icon',
        title: "I'm also Freelance!!!",
        text: 'I am able to confidently offer my skills as a service to customers who require getting prototype designs turned into functional and responsive web pages, or require web pages designed from scratch.',
    }
]

const Services = () => {
  return (
    <section className="service mb-8">
        <h3 className="h3 service-title mb-5">What I'm Doing</h3>
        <ul className="service-list grid grid-cols-1 gap-5 ">
            {
                info.map((item, index) => (
                    <li key={index} className="service-item relative bg-gradient-onyx p-5 rounded-[14px] shadow-2 z-[1] before:absolute inset-[1px] before:bg-gradient-jet before:rounded-inherit before:z-[1]">
                        <div className="service-icon-box mb-3">
                            <img src={item.img} alt={item.alt} width="40" className='m-auto' />
                        </div>
                        <div className="service-content-box text-center">
                            <h4 className="h4 service-item-title mb-2">{item.title}</h4>
                            <p className="service-item-text text-light-gray text-fs-6 font-fw-300 leading-[1.6]">{item.text}
                            </p>
                        </div>
                    </li>
                ))
            }
        </ul>

    </section>
  )
}

export default Services