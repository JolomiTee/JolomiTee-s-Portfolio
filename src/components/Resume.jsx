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
            devExperience: "A Hospital Management System",
            duration: "May 2023 - September 2023",
            text: "I collaborated with both Backend and Frontend developers to create a powerful and functional Hospital Management System. It's features include keeping track of patient data, purchases and billings, inventory items, booking of apointments, and general digital storage and handling of data pertaining to activities carried out in a hospital establishment. It is a database backed application with a large number of API integrations that allow for seamless creation, retrieval, updating and deletion of hospital data.",
            link: "",
            linkText: "",
        },
        {
            devExperience: "Greenbarter Currency Exchange Frontend Development Team Lead",
            duration: "March 2023 - Present",
            text: "I am the Frontend Development Team Lead for the Fintech Startup called Greenbarter, where I am responsible for building the Web application's Frontend user interface and implementing good user experience.",
            link: "https://greenbarter.co",
            linkText: "Go to Greenbarter",
        },
        {
            devExperience: "Revinance Frontend Development Team Lead",
            duration: "October 2022 - February 2023",
            text: "I am the Frontend Development Team Lead for the Fintech Startup called Revinance, where  am responsible for building the Web application's Frontend user interface and implementing good user experience.",
            link: "https://revinance.com",
            linkText: "Go to Revinance",
        },
        {
            devExperience: "Udemy Fullstack Development Course",
            duration: "September 2022 - Present",
            text: "I am currently enrolled in a Fullstack Web Development Bootcamp Course on the Udemy platform to widen my knowledgebase and gain more even skills",
            link: "",
            linkText: "",
        },
        {
            devExperience: "ALX-T Udacity Fullstack Development",
            duration: "July 2022 - October 2022",
            text: "I enrolled for the ALX-T Fullstack Web Development Course by recomendation. It exposed me to a variety of web echnologies such as the Flask Micro-framework, Jinja Templating, HTTPS, CORS, Database Management with PostgreSQL, Unittests and other interesting concepts relating to fullstack web development",
            link: "https://confirm.udacity.com/AECLR25X",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Side Hustle Frontend Web Development Internship (React.js)",
            duration: "August 2022 — September 2022",
            text: "I applied for the Side Hustle Frontend Development(React.js) where i learn the React Javascript library to build more modern and dynamic websites.",
            link: "https://certificate.terrahq.co/14592LWESJDGNX21",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Zuri Part Time Frontend Web Development Internship (HTML, CSS, Javascript)",
            duration: "May 2022 - August 2022",
            text: "I undertook the I4G x Zuri Frontend web development internship with their part-time option, where I learnt how to create better looking websites, work better with Javascript, and complete multiple projects",
            link: "https://drive.google.com/file/d/1DCvSFASQgnw3Wz8j9ZGUb5zJn-9slS2b/view?usp=sharing",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Side Hustle Frontend Web Development Internship (HTML, CSS, Javascript)",
            duration: "April 2022 - May 2022",
            text: "I applied for the Side Hustle Frontend Development Internship where i gained better frontend development Knowledge and skills. The internship experience solidified my interest for Web design and development. I was selected as a group leader and my team had two successfully submitted projects.",
            link: "https://certificate.terrahq.co/1262373MHY01",
            linkText: "Certificate of completion Here",
        },
        {
            devExperience: "Side Hustle App Development Internship",
            duration: "April 2022 - May 2022",
            text: "I took the App Development Internship course at Side Hustle as a second option to frontend development. I was also a Team Lead, and had two projects submitted successfully with my team.",
            link: "",
            linkText: "",
        },
        {
            devExperience: "Self Assisted Learning and Training",
            duration: "March 2021 - Present",
            text: "I took interest in Web Development late March 2021. I have not stopped learning ever since.",
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
            name: "Material UI",
            link: "https://img.icons8.com/color/480/material-ui.png"
        },
        {
            name: "React",
            link: "https://img.icons8.com/ultraviolet/120/null/react--v1.png"
        },
        {
            name: "Next JS",
            link: "https://img.icons8.com/fluency/400/nextjs.png"
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


        // supplementary
        // {
        //     name: "Typescript",
        //     link: "https://img.icons8.com/color/144/typescript.png"
        // },
        // {
        //     name: "NodeJS",
        //     link: "https://img.icons8.com/color/480/nodejs.png"
        // },
        // {
        //     name: "Express JS",
        //     link: "https://img.icons8.com/nolan/512/express-js.png"
        // },
        // {
        //     name: "Postgres",
        //     link: "https://img.icons8.com/color/480/postgreesql.png"
        // },
        // {
        //     name: "SQL",
        //     link: "https://img.icons8.com/color/480/mysql-logo.png"
        // },

    ]

]

const Resume = () => {
    return (
        <>

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
                        <ion-icon name="globe-outline"></ion-icon>
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

                                <p className="timeline-text text-light-gray font-fw-300 leading-[1.6]">
                                    {items.text}
                                    <a target="_blank"
                                        href={items.link}
                                    >
                                        {items.linkText}
                                    </a>
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
                                <img src={items.link} width="60" alt={items.name} />
                            </li>
                        ))
                    }
                </ul>

            </section>

        </>
    )
}

export default Resume