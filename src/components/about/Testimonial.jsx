import React from 'react'
import Avatar1 from '../../assets/images/avatar-1.png'
import Avatar2 from '../../assets/images/avatar-2.png'
import Avatar3 from '../../assets/images/avatar-3.png'
import Avatar4 from '../../assets/images/avatar-4.png'
import TestimonialModal from './TestimonialModal'
import { useState, useEffect } from 'react'

const avatars=[
    {
        Avatar1,
        Avatar2
    }
]
const info = [
    {
        img: Avatar1,
        alt: 'Onoda Temidayo',
        name: 'Onoda Temidayo',
        sex: true,
        role: 'Frontend Developer at Catchup',
        text: "Taiwo demonstrates effective productivity to deliver outstanding work. He exhibits excellent communication abilities, effective time management, and overall, has a strong performance which was complemented by his ability to pick up new skills and put them to use."
    },
    {
        img: Avatar2,
        alt: 'Lateefah Bello',
        name: 'Lateefah Bello',
        sex: false,
        role: 'Backend Developer at Python',
        text: "Taiwo is a great web designer who understands context and puts them to use to make projects. He's a creative person, a teacher and a good listener. I recommend him for an effortless job well done."
    },
    {
        img: Avatar3,
        alt: 'Divine James',
        name: 'Divine James',
        sex: false,
        role: 'Data Analyst at Catchup',
        text: "Taiwo is a dynamic Web Developer, who is a bit of a shy workaholic. He shows a lot of passion and dedication to work and he has very strong communication skills. He shows great team spirit, and is a great team leader for executed projects. He is someone with a growth mindset and I highly recommend him."
    },
    {
        img: Avatar4,
        alt: 'Ogunya Marvelous',
        name: 'Ogunya Marvelous',
        sex: true,
        role: 'Product Designer at Greenbarter',
        text: "Taiwo is a dynamic Web Developer, who is a bit of a shy workaholic. He shows a lot of passion and dedication to work and he has very strong communication skills. He shows great team spirit, and is a great team leader for executed projects. He is someone with a growth mindset and I highly recommend him."
    },
]


const Testimonial = () => {
    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent] = useState([])

    const handleOpenModal = (items) => {
        setOpenModal(true)
        changeModalContent(items)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const changeModalContent = (items) => {
        setModalContent(items)
    }


    return (
        <section className="testimonials mb-10">

            <h3 className="h3 testimonials-title mb-5 flex gap-1 md:mb-6">People I<span className="lowercase">have worked with</span></h3>

            <ul className="testimonials-list flex justify-start items-start gap-[15px] my-0 mx-[-15px] pb-[35px] pt-7 px-3 has-scrollbar md:gap-8 md:my-0 md:mx-[-25px]">
                {
                    info.map((items, index) => (
                        <li key={index} className="testimonials-item min-w-full snap-center">
                            <div className="content-card md:p-8 md:pt-5" onClick={() => handleOpenModal(items)}>

                                <figure className="testimonials-avatar-box bg-gradient-onyx rounded-[14px] shadow-1 absolute top-[-25px] md:top-[-23px] left-5 md:left-3">
                                    <img src={items.img} alt={items.alt} className='w-[80px] md:w-[90px] lg:w-[95px]' data-testimonials-avatar />
                                </figure>

                                <div className='testimonials-item-title mb-3 md:ml-24 lg:ml-[100px]'>
                                    <h4 className="h4 mt-5 md:mt-0 lg:text-fs-2">
                                        {items.name}
                                    </h4>
                                    <p className='text-white-2 text-fs-7'>{items.role}</p>

                                </div>
                                <div className="testimonials-text text-light-gray text-fs-5 lg:text-fs-4 font-fw-300 leading-[1.6] line-clamp-4 md:line-clamp-2" data-testimonials-text>
                                    <p>
                                        {items.text}
                                    </p>
                                </div>
                            </div>

                        </li>
                    ))
                }

                <TestimonialModal
                    show={openModal}
                    hide={handleCloseModal}
                    content={modalContent}
                />

            </ul>


        </section>
    )
}

export default Testimonial