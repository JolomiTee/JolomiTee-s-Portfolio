import React from 'react'
import Services from './about/Services'
import Testimonial from './about/Testimonial'
import MyClients from './about/MyClients'

const About = () => {
    return (
        <>

            <header>
                <h2 className="h2 article-title">About Me</h2>
            </header>

            <section className="about-text text-light-gray text-fs-6 font-fw-300 leading-[1.6]">
                <p className='mb-4 md:mb-6'>
                    A guy interested in the subtle art of transforming and translating designs to working, multifunctional and amazing websites by sitting in front of a screen all day long... clacking at a an RGB keyboard with a long key travel distance.
                </p>
            </section>

            <Services />

            <MyClients />

            <Testimonial />

        </>
    )
}

export default About