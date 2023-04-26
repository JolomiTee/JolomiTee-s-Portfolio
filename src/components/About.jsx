import React from 'react'
import Services from './about/Services'
import Testimonial from './about/Testimonial'
import MyClients from './MyClients'

const About = () => {
    return (
        <article>

            <header>
                <h2 className="h2 article-title">About Me</h2>
            </header>

            <section className="about-text text-light-gray text-fs-6 font-fw-300 leading-[1.6]">
                <p className='mb-4'>
                    Interested in the subtle art of transforming and translating Designs to working, multifunctional and amazing websites by sitting in front of a screen all day long... clacking at a an RGB keyboard that has a large travel distance.
                </p>
            </section>

            <Services />

            <Testimonial />

            <MyClients />




        </article>
    )
}

export default About