
const info = {
   items: [
      {
         href: "https://github.com/JolomiTee",
         ion_icon: "logo-github",
         title: "Github"
      },
      {
         href: "https://www.linkedin.com/in/jolomitee",
         ion_icon: "logo-linkedin",
         title: "LinkedIn"
      },
      {
         href: "https://twitter.com/truff_lazy",
         ion_icon: "logo-twitter",
         title: "Twitter"
      },
   ]
}

const SocialList = () => {
   return (
      <ul className='social-list flex justify-start items-center gap-4 pb-1 ps-2 2xl:justify-center'>
         {
            info.items.map((items, index) =>
            (
               <li key={index} className="social-item">
                  <a href={items.href} target="_blank" title={items.title} className="social-link text-light-gray-70 text-fs-2 hover:text-light-gray">
                     <ion-icon name={items.ion_icon}></ion-icon>
                  </a>
               </li>
            ))
         }
      </ul>
   )
}

export default SocialList
