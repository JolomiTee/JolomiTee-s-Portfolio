import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
   const [showNavbar, setShowNavbar] = useState(true);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= 1024) {
            setShowNavbar(true);
         } else {
            setShowNavbar(false);
         }
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <>
         <Sidebar />
         <article className='xl:relative xl:min-w-full 2xl:min-w-[75%] 2xl:w-[750px] 2xl:m-0 2xl:mt-2'>
            {!showNavbar && <Navbar />}
            <Outlet />
         </article>
         {showNavbar && <Navbar />}
      </>
   )
}

export default Home