import React from 'react'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Footer from './Footer'
import Skills from './Skills'
import Work from './Work'
import Projects from './Projects'

function Rightside() {

    return (
        <div className="container-fluid p-0 ">
        {/* <i class="fa-regular fa-moon"></i> */}
        {/* <div className='flex justify-center items-center my-4'>
            {
                state === "light" ? 
                <>
                <div className='py-2 px-4 bg-[#]'>
                <i class="fa-solid fa-moon-stars"></i>
                </div>
                </>
                :
                <>
                <div className='py-2 px-4 bg-[#]'>
                <i class="fa-solid fa-sun"></i>
                </div>
                </>
            }
        </div> */}
        <About />
        <Experience />
        <Work />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
        </div>
    )
}

export default Rightside
