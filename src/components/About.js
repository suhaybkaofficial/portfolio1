import React from "react";

function About() {
  return (
    <div>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Suhaib
            <span className="text-primary"> Hassan</span>
          </h1>
          <h3>Full Stack Engineer</h3>
          <div className="subheading mb-5">
            Istanbul, Turkey
            <br />
            +(90) 552-893-45-85
            <br />
            <a href="mailto:contact@suhaybka.me">suhaybmaxamuud55@gmail.com</a>
            <br />
            <a href="mailto:contact@suhaybka.me">contact@suhaybka.me</a>
          </div>
          <p className="lead mb-5">
            I'm Suhaib Hassan aka Suhaybka. I Graduated Faculty of Computing &
            IT, Experienced frontend-focused full-stack developer with 3+ years
            of expertise in designing, developing, and implementing responsive
            websites, web apps, and mobile apps. Proficient in HTML, CSS,
            JavaScript, React, Next.js, Tailwind CSS, React Native, and backend
            technologies. Strong UX/UI skills and a collaborative approach for
            successful project delivery.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.instagram.com/suhaybkaofficial"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.github.com/suhaybkaofficial"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.twitter.com/suhaybkaofficia"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/suhaybkaofficial"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/suhaib-mohamoud-hassan-a50436184/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default About;
