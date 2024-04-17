import { projects } from "../data/data"

function splitStr(str, separator) {
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

                              <img src={project.img} alt={project.name} loading="lazy" className='w-full h-full object-cover lg:object-fill transition-1' />

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