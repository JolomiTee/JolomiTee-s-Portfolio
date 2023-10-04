import React from 'react';
import Project1 from "../assets/images/ProjectImg/Project1.png";
import Project2 from "../assets/images/ProjectImg/Project2.png";
import Project3 from "../assets/images/ProjectImg/Project3.png";
import Project4 from "../assets/images/ProjectImg/Project4.png";
import Project5 from "../assets/images/ProjectImg/Project5.png";
import Project6 from "../assets/images/ProjectImg/Project6.png";
import Project7 from "../assets/images/ProjectImg/Project7.png";
import Project8 from "../assets/images/ProjectImg/Project8.png";
import Project9 from "../assets/images/ProjectImg/Project9.png";
import Project10 from "../assets/images/ProjectImg/Project10.png";
import Project11 from "../assets/images/ProjectImg/Project11.png";
import Project12 from "../assets/images/ProjectImg/Project12.png";
import Project13 from "../assets/images/ProjectImg/Project13.png";
import Project14 from "../assets/images/ProjectImg/Project14.png";
import Project15 from "../assets/images/ProjectImg/Project15.png";
import Project16 from "../assets/images/ProjectImg/Project16.png";
import Project17 from "../assets/images/ProjectImg/Project17.png";
import Project18 from "../assets/images/ProjectImg/Project18.png";
import Project19 from "../assets/images/ProjectImg/Project19.png";
import Project20 from "../assets/images/ProjectImg/Project20.jpg";


const projects = [
    {
        name: "Fylo Landing page",
        link: "https://jolomitee.github.io/SH_Capstone_Project_1/",
        img: Project1,
        category: "frontend mentor, landing page, bootstrap",
        responsive: true,
    },
    {
        name: "Zuri Landing Page",
        link: "https://jolomitee.github.io/Zuri-Final-Task/",
        img: Project2,
        category: "zuri, task, landing page",
        responsive: true,
    },
    {
        name: "Sign Up Page",
        link: "https://jolomitee.github.io/Zuri-Projects/",
        img: Project3,
        category: "zuri, task, signup page",
        responsive: true,
    },
    {
        name: "Museum of Candy",
        link: "https://jolomitee.github.io/Proj_Collab_1_Divine_and_Taiwo/",
        img: Project4,
        category: "frontend mentor, challenge",
        responsive: true,
    },
    {
        name: "Mock Admin Dashboard",
        link: "https://jolomitee.github.io/Admin_Dashboad_1/",
        img: Project5,
        category: "mock design",
        responsive: true,
    },
    {
        name: "Bookmark Landing Page",
        link: "https://bookmark-meec.onrender.com/https://jolomitee.github.io/Admin_Dashboad_1/",
        img: Project6,
        category: "landing page, tailwindcss",
        responsive: true,
    },
    {
        name: "Manage Landing Page",
        link: "https://jolomitee.github.io/first-tailwind-project/",
        img: Project7,
        category: "landing page, tailwindcss",
        responsive: true,
    },
    {
        name: "SaveSpace Landing Page",
        link: "https://jolomitee.github.io/SaveSpace/",
        img: Project8,
        category: "landing page, tailwindcss",
        responsive: true,
    },
    {
        name: "CatchUp Landing Page",
        link: "https://catchup-omega.vercel.app/",
        img: Project9,
        category: "landing page, tailwindcss",
        responsive: true,
    },
    {
        name: "React Weather App",
        link: "https://weather-app-jolomitee.vercel.app/",
        img: Project10,
        category: "react, weather-api, geolocation-api",
        responsive: true,
    },
    {
        name: "Text Editor",
        link: "https://jolomitee.github.io/JS-Text-Editor/",
        img: Project11,
        category: "javascript",
        responsive: true,
    },
    {
        name: "Photo Album",
        link: "https://mui-sage.vercel.app/",
        img: Project12,
        category: "react, material-ui ",
        responsive: true,
    },
    {
        name: "Advent Of CSS",
        link: "https://advent-of-css-tau.vercel.app/",
        img: Project13,
        category: "advent-of-css, 24-challenges, CSS ",
        responsive: true,
    },
    {
        name: "Subasta E-commerce",
        link: "https://commercio.onrender.com",
        img: Project14,
        category: "frontend design, bootstrap, e-commerce site",
        responsive: true,
    },
    {
        name: "HooBank Landing Page",
        link: "https://hoobank-dkt9.onrender.com",
        img: Project15,
        category: "react, tailwindcss, landing page",
        responsive: true,
    },
    {
        name: "Portfolio Design",
        link: "https://trial-react-portfolio.vercel.app/",
        img: Project16,
        category: "react, tailwindcss, portfolio page",
        responsive: true,
    },
    {
        name: "Youtube Clone",
        link: "https://jsm-youtube-clone.netlify.app/",
        img: Project17,
        category: "react, material ui, site clone",
        responsive: true,
    },
    {
        name: "Admin Dashboard",
        link: "https://syncfusion-admin-dashboard.vercel.app/",
        img: Project18,
        category: "react, syncfusion, dashboard, charts, tables",
        responsive: true,
    },
    {
        name: "Dashboard Variants",
        link: "https://dashboardvariants.vercel.app/",
        img: Project19,
        category: "react, dashboard, template, wallet",
        responsive: true,
    },
    {
        name: "GetLinked Hackathon UI Challenge",
        link: "https://dashboardvariants.vercel.app/",
        img: Project20,
        category: "react, landing-page, UI Challenge, transitions ",
        responsive: true,
    },
    // {
    //     name: String,
    //     link: String,
    //     img: String,
    //     category: String,
    //     responsive: Boolean,
    // },
]
function splitStr(str, separator){
    const categoryArray = str.split(separator)
    return categoryArray.map((item, index) => (
        <span key={index} className="tag border border-solid border-white-2 px-3 rounded-xl">{item}</span>
    ))
}

let comma = ','
const projectList = projects.reverse()

const Projects = () => {
  return (
    <>
        <header>
            <h2 className="h2 article-title mb-6">My Projects</h2>
        </header>

        <section className="projects">

            <ul className="project-list flex justify-center flex-wrap gap-8 mb-3">
                {
                    projectList.map((project, index) => (

                        <li key={index} className="project-item block">

                            <a className='w-full' target="_blank" href={project.link}>

                                <figure className="project-img relative  aspect-video rounded-2xl overflow-hidden mb-4 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-opacity-0 z-[1] transition-1">

                                    <div className="project-item-icon-box scale-.75 bg-jet text-orange-yellow-crayola absolute top-[35%] left-[40%] text-[20px] p-5 rounded-xl opacity-0 z-[1] transition-1">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src={project.img} alt={project.name} loading="lazy" className='w-full h-full object-cover lg:object-fill transition-1'/>

                                </figure>

                                <h3 className="project-title ml-3 mb-2 text-white-1 text-fs-4 font-fw-400 capitalize leading-[1.3]">
                                    {project.name}
                                </h3>

                                <div className="tags ml-3 flex flex-wrap gap-2 text-vegas-gold text-fs-7">
                                    {
                                        splitStr(project.category, comma)
                                    }
                                </div>
                            </a>
                            <div className="separator md:my-6"></div>
                        </li>

                    ))
                }


            </ul>
        </section>

    </>
  )
}

export default Projects