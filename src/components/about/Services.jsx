import React from 'react'
import DesignIcon from '../../assets/icons/icon-design.svg'
import IconDev from '../../assets/icons/icon-dev.svg'

const info = [
   {
      img: IconDev,
      alt: 'Design icon',
      title: 'Web Design and Development',
      text: 'I have Internship and Real world working experience of Frontend Web Development technologies and building functional and dynamic websites that meet modern web development standards. I am also able to work and integrate smoothly into a development team to ensure building a high quality web product.',

   },
   {
      img: DesignIcon,
      alt: 'Development icon',
      title: "I'm also Freelance!!!",
      text: 'I am able to confidently offer my skills as a service to clients or businesses that require creating pixel perfect webpages from design prototypes, while also making their interfaces highly responsive and useable by all kinds of people. Whether its a landing page or a web app interface... I\'m sure to deliver!',
   }
]

const Services = () => {
   return (
      <section className="service mb-8">
         <h3 className="h3 service-title mb-5">What I'm Doing</h3>
         <ul className="service-list grid grid-cols-1 gap-5 xl:grid-cols-2">
            {
               info.map((item, index) => (
                  <li key={index} className="service-item relative bg-gradient-onyx p-5 rounded-[14px] shadow-2 z-[1] before:absolute inset-[1px] before:bg-gradient-jet before:rounded-inherit before:z-[1] md:flex">
                     <div className="service-icon-box mb-3 w-full md:max-w-[60px]">
                        <img src={item.img} alt={item.alt} className='m-auto md:m-0' />
                     </div>
                     <div className="service-content-box text-center md:text-start">
                        <h4 className="h4 service-item-title mb-2 lg:text-fs-2">{item.title}</h4>
                        <p className="service-item-text text-light-gray text-fs-6 lg:text-fs-4 font-fw-300 leading-[1.6]">{item.text}
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