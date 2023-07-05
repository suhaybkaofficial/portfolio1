import React from 'react'
import './App.css'
function Leftside() {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none"><img className="mx-auto mb-2" src="assets/img/logo.jpg" style={{width:"100%",height:"40px"}} alt="..." /></span>
            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#work">Work</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
               <br />
               <div className="dark">
        <a className='bg-white mt-4 mb-4 py-2 px-4 text-decoration-none rounded-pill' rel='noreferrer' style={{textTransform:"none",fontWeight:"semibold",marginTop:10}} href="https://www.suhaybka.me/Resume.pdf" target='_blank' ><i class="fas fa-download"></i> Download CV</a>
        </div>
            </ul>
            
        </div>
    </nav>
   
    </div>
    )
}

export default Leftside
