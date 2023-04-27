import React from 'react'
const info = [
    {
        school: "Federal University of Technology Akure",
        startDate: "2017",
        endDate: "Present",
        text: "I am a student of Biotechnology Department. I have had basic Microbiology, Biochemistry, Crop Science and Production knowledge. I am yet to graduate."
    },

    [
        {
            devExperience: "Revinance Frontend Development Team Lead",
            duration: "October 2022 - February 2023",
            text: "I am the Frontend Development Team Lead for the Fintech Startup called Revinance, where i am responsible for building the Web application's frontend user interface and implementing good user experience.",
            link: "https://revinance.com",
            linkText: "Go to Revinance",
        },
        {
            devExperience: "Udemy Fullstack Development",
            duration: "September 2022 - Present",
            text: "I am currently enrolled in a Fullstack Web Development Bootcamp Course on the Udemy platform to further my learning and to complement the experience which ALX-T Udacity Fullstack course has exposed me to.",
            link: "",
            linkText: "",
        },
        {
            devExperience: "ALX-T Udacity Fullstack Development",
            duration: "July 2022 - October 2022",
            text: "I enrolled for the ALX-T Fullstack Web Development Course by recomendation. I have curently completed two fullstack projects on it. It has exposed me to a variety of new web echnologies such as the Flask Micro-framework, Jinja Templating, HTTPS, CORS, Database Management with PostgreSQL, Unittests and other interesting concepts.",
            link: "https://confirm.udacity.com/AECLR25X",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Side Hustle Frontend Web Development Internship (React.js)",
            duration: "August 2022 — September 2022",
            text: "I have just recently completed the Side Hustle React internship, and now, I am currently embarking on private projects to further sharpen my new skills.",
            link: "https://certificate.terrahq.co/14592LWESJDGNX21",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Zuri Part Time Frontend Web Development Internship (HTML, CSS, Javascript)",
            duration: "May 2022 - August 2022",
            text: "I undertook the I4G x Zuri Frontend web development internship as a part-time student, where I learnt how to create better looking websites, and work better with Javascript.",
            link: "https://drive.google.com/file/d/1DCvSFASQgnw3Wz8j9ZGUb5zJn-9slS2b/view?usp=sharing",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Side Hustle Frontend Web Development Internship (HTML, CSS, Javascript)",
            duration: "April 2022 - May 2022",
            text: "This was my first internship in which I started to solidify my interest for Web design and development. I was nominated as a group leader and my team had two successfully submitted basic projects.",
            link: "https://certificate.terrahq.co/1262373MHY01",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Side Hustle App Development Internship",
            duration: "April 2022 - May 2022",
            text: "I took the App Development Internship course at Side Hustle as a second option to frontend development. I was also the group leader through two projects submitted successfully.",
            link: "",
            linkText: "",
        },
        {
            devExperience: "Self Assisted Learning and Training",
            duration: "March 2021 - Present",
            text: "Humble Beginnings last for a while. I have not stopped learning ever since I got into web development in March 2021.",
            link: "",
            linkText: "",
        },
    ],

    [
        {
            name: "HTML",
            link: "https://img.icons8.com/color/344/html-5--v1.png",
        },
        {
            name: "CSS",
            link: "https://img.icons8.com/color/344/css3.png"
        },
        {
            name: "JavaScript",
            link: "https://img.icons8.com/color/344/javascript--v1.png"
        },
        {
            name: "Bootstrap",
            link: "https://img.icons8.com/external-those-icons-flat-those-icons/344/external-Bootstrap-Logo-social-media-those-icons-flat-those-icons.png"
        },
        {
            name: "TailwindCSS",
            link: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png"
        },
        {
            name: "SCSS",
            link: "https://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png"
        },
        {
            name: "React",
            link: "https://img.icons8.com/ultraviolet/120/null/react--v1.png"
        },
        {
            name: "Github",
            link: "https://img.icons8.com/nolan/128/github.png"
        },
        {
            name: "Visual Studio Code",
            link: "https://img.icons8.com/color/96/null/visual-studio-code-2019.png"
        },
        {
            name: "Figma",
            link: "https://img.icons8.com/color/144/null/figma--v1.png"
        },
    ]

]

const Resume = () => {
  return (
    <article className="resume" data-page="resume">

        <header>
            <h2 className="h2 article-title mb-8">My Timeline</h2>
        </header>

        <section className="timeline mb-8">

            <div className="title-wrapper flex items-center gap-4 mb-6">

                <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Formal Education</h3>

            </div>

            <ul className="timeline-list text-fs-6 ml-11">

                <li className="timeline-item relative">

                    <h4 className="h4 timelime-item-title text-fs-6 leading-[1.3] mb-2">
                        Federal University of Technology Akure
                    </h4>

                    <span className='text-vegas-gold font-fw-400 leading-[1.6]'>2017 — Present</span>

                    <p className="timeline-text text-light-gray font-fw-300 leading-[1.6]">
                        I am a student of Biotechnology Department. I have had basic Microbiology, Biochemistry, Crop Science and Production knowledge. I am yet to graduate.
                    </p>
                </li>

            </ul>
        </section>

        <section className="timeline mb-8">

            <div className="title-wrapper flex items-center gap-4 mb-6">

                <div className="icon-box">
                    <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Web Development Experience</h3>

            </div>

            <ul className="timeline-list text-fs-6 ml-11">
                {
                    info[1].map((items, index) => (
                        <li key={index} className="timeline-item relative">

                            <h4 className="h4 timelime-item-title text-fs-6 leading-[1.3] mb-2">
                                {items.devExperience}
                            </h4>

                            <span className='text-vegas-gold font-fw-400 leading-[1.6]'>{items.duration}</span>

                            <p className="timeline-text text-light-gray font-fw-300 leading-[1.6]">{items.text}
                                <a target="_blank" href={items.link}>{items.linkText}</a>
                            </p>
                        </li>
                    ))
                }



            </ul>




        </section>

        <section className="skill mb-8">
            <h3 className="h3 mb-3">Tools of the Trade</h3>

            <ul className="skills-list flex flex-wrap gap-3 justify-center items-center">
                {
                    info[2].map((items, index) => (
                        <li key={index} className="skill-item">
                            <img src={items.link} width="50" alt={items.name} />
                        </li>
                    ))
                }
            </ul>

        </section>


        <article className="text-white-1">
            Next, you can check out my Projects
        </article>

    </article>
  )
}

export default Resume