import React from 'react'

const TestimonialModal = () => {
    return (
        <div className={`modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center overflow-y-auto overscroll-contain z-[20] pointer-events-none invisible`} data-modal-container>

            <div className={`overlay fixed top-0 left-0 w-full h-full bg-overlay opacity-0 invisible pointer-events-none z-[1] transition-1`} data-overlay></div>

            <section className={`testimonials-modal bg-eerie-black-2 relative p-4 mx-3 my-4 border border-solid border-jet rounded-[14px] shadow-5 scale-[1.2] opacity-0 transition-1 z-[2]`}>

                <button title="close" className="modal-close-btn absolute top-[15px] right-[15px] bg-onyx rounded-lg width-[32px] height-[32px] flex justify-center items-center text-white-2 text-fs-2 opacity-[.8] active:opacity-100 focus:opacity-100" data-modal-close-btn>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box bg-gradient-onyx w-max rounded-[14px] mb-4 shadow-2">
                        <img src="../../assets/images/avatar-1.png" alt="Richmore Ibeh" className='hidden' data-modal-img/>
                    </figure>

                    <img src="./assets/images/icon-quote.svg" className='hidden' alt="quote icon"/>
                </div>

                <div className="modal-content">

                    <h4 className="h3 modal-title mb-1" data-modal-title>Richmore Ibeh</h4>

                    <time dateTime="2022-05-01" className='text-6 text-light-gray-70 font-fw-300 mb-3'>1 May, 2022</time>

                    <div data-modal-text>
                        <p className='text-light-gray text-fs-6 font-fw-300 leading-1.6'>
                            Taiwo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default TestimonialModal