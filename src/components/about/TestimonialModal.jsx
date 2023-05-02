import React from 'react'
import QuoteMark from '../../assets/icons/icon-quote.svg'

const TestimonialModal = ({show, hide, content}) => {
    return (
        <div className={`modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center overflow-y-auto overscroll-contain z-[20] pointer-events-none md:p-5 ${show ? 'visible' : 'invisible'}`} onClick={hide}>

            <div className={`overlay fixed top-0 left-0 w-full h-full bg-overlay pointer-events-none z-[1] transition-1 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={hide}></div>

            <section className={`testimonials-modal bg-eerie-black-2 relative p-4 mx-3 my-4 border border-solid border-jet rounded-[14px] shadow-5 scale-[1.2] transition-1 z-[2] md:flex md:justify-start md:items-center md:gap-6 md:p-8 md:rounded-[20px] lg:gap-9 lg:max-w-[600px] ${show ? 'opacity-100' : 'opacity-0'} `} onClick={hide}>

                <button name="close" className="modal-close-btn absolute top-[15px] right-[15px] bg-onyx rounded-lg width-[32px] height-[32px] flex justify-center items-center text-white-2 text-fs-2 opacity-[.8] active:opacity-100 focus:opacity-100 cursor-pointer pointer-events-auto" onClick={hide}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div className="modal-img-wrapper md:flex md:flex-col md:items-center">
                    <figure className="modal-avatar-box bg-gradient-onyx w-max rounded-[14px] mb-4 shadow-2 md:rounded-[18px] md:mb-0">
                        <img src={content.img} alt={content.alt} className='md:w-16 lg:w-20' data-modal-img/>
                    </figure>

                    <img src={QuoteMark} className='hidden md:block md:grow md:w-9' alt="quote icon"/>
                </div>

                <div className="modal-content">

                    <h4 className="h3 modal-name mb-1" data-modal-name>{content.name}</h4>

                    <time dateTime="2022-05-01" className='text-6 text-light-gray-70 font-fw-300 mb-3'>Web Developer and designer</time>

                    <div data-modal-text>
                        <p className='text-light-gray text-fs-6 font-fw-300 leading-1.6'>
                            {content.text}
                        </p>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default TestimonialModal