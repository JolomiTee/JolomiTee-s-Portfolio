import { info } from "../data/data"

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
               {
                  info[0].map((items, index) => (
                     <li key={index} className="timeline-item relative">

                        <h4 className="h4 timelime-item-title text-fs-6 leading-[1.3] mb-2">
                           {items.school}
                        </h4>

                        <span className='text-vegas-gold font-fw-400 leading-[1.6]'>{items.startDate} — {items.endDate}</span>

                     </li>
                  ))
               }
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
            <ul className="skills-list flex flex-wrap gap-5 justify-center items-center">
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