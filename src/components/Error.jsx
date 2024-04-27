import { Link } from "react-router-dom"
import { useState } from "react"
const Error = () => {
   const [err, setErr] = useState("Go Back")
   return (
      <div className='portfolio'>
         <header>
            <h2 className="h2 article-title mb-6">Oops, Page not found!</h2>
         </header>
         <div className="text-white-1 mb-6 text-center">
            <p>The page you are looking for does not exist.</p>

            <small>I didn't create it 😪</small>

            <Link className="mt-5" to={"#"} onClick={
               setTimeout(() => {
                  try {
                     setErr("Let's go back shall we?...")
                  } catch (error) {
                     return
                  } finally {
                     history.back()
                  }
               }, 10000)
            }>{err}</Link>
         </div>
      </div>
   )
}

export default Error