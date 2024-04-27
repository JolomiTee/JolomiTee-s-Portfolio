import DesignIcon from '../../assets/icons/icon-design.svg'
import IconDev from '../../assets/icons/icon-dev.svg'

const info = [
   {
      img: IconDev,
      alt: 'Design icon',
      title: 'Web Design and Development',
      text: "I bring a wealth of hands-on expertise in frontend web development, adept at crafting dynamic, standards-compliant websites. With a strong grasp of modern technologies, I ensure the creation of functional and visually appealing interfaces. My ability to seamlessly integrate into development teams enables the delivery of high-quality web products.",

   },
   {
      img: DesignIcon,
      alt: 'Development icon',
      title: "#OPENTOWORK",
      text: "Props to LinkedIn. I confidently offer my expertise to clients and businesses seeking pixel-perfect webpage creation from design prototypes. My focus lies in ensuring highly responsive and user-friendly interfaces accessible to diverse audiences. Whether it's crafting a landing page or a complex web app interface, I guarantee impeccable delivery.",
   }
]

const Services = () => {
   return (
      <section className="service mb-8">
         <h3 className="h3 service-title mb-5">What I'm Doing</h3>
         <ul className="service-list grid grid-cols-1 gap-6 xl:grid-cols-2">
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