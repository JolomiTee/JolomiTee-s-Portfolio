import React from 'react'
import Avatar1 from '../../assets/images/avatar-1.png'
import Avatar2 from '../../assets/images/avatar-2.png'
import Avatar3 from '../../assets/images/avatar-3.png'
import Avatar4 from '../../assets/images/avatar-4.png'

const info = [
    {
        img: Avatar1,
        alt: 'Onoda Temidayo',
        name: 'Onoda Temidayo',
        text: "Taiwo demonstrates effective productivity to deliver outstanding work. He exhibits excellent communication abilities, effective time management, and overall, has a strong performance which was complemented by his ability to pick up new skills and put them to use."
    },
    {
        img: Avatar2,
        alt: 'Lateefah Bello',
        name: 'Lateefah Bello',
        text: "Taiwo is a great web designer who understands context and puts them to use to make projects. He's a creative person, a teacher and a good listener. I recommend him for an effortless job well done."
    },
    {
        img: Avatar3,
        alt: 'Divine James',
        name: 'Divine James',
        text: "Taiwo is a dynamic Web Developer, who is a bit of a shy workaholic. He shows a lot of passion and dedication to work and he has very strong communication skills. He shows great team spirit, and is a great team leader for executed projects. He is someone with a growth mindset and I highly recommend him."
    },
    {
        img: Avatar4,
        alt: 'Ogunya Marvelous',
        name: 'Ogunya Marvelous',
        text: "Taiwo is a dynamic Web Developer, who is a bit of a shy workaholic. He shows a lot of passion and dedication to work and he has very strong communication skills. He shows great team spirit, and is a great team leader for executed projects. He is someone with a growth mindset and I highly recommend him."
    },
]

const Testimonial = () => {
  return (
    <section className="testimonials mb-10">

        <h3 className="h3 testimonials-title mb-5">Testimonials</h3>

        <ul className="testimonials-list flex justify-start items-center gap-[15px] my-0 mx-[-15px] pb-[35px]  has-scrollbar">
            {
                info.map((items, index) => (
                    <li class="testimonials-item">
                            <div class="content-card" data-testimonials-item>

                                <figure class="testimonials-avatar-box">
                                    <img src={items.img} alt={items.alt} width="60" data-testimonials-avatar />
                                </figure>

                                <h4 class="h4 testimonials-item-title" data-testimonials-title>
                                    {items.name}
                                </h4>
                                <div class="testimonials-text" data-testimonials-text>
                                    <p>
                                        {items.text}
                                    </p>
                                </div>
                            </div>
                        </li>
                ))
            }

        </ul>

    </section>
  )
}

export default Testimonial