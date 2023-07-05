import React from "react";
import "./Project.css";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Whatsapp Web Clone",
      image: "https://i.ibb.co/m5YS91v/whatsapp.jpg",
      description:
        "This is a clone of the Whatsapp Web application built using Next.js with Tailwind CSS. The app allows users to join chat groups and start conversations. It utilizes Firebase for backend services, including Firestore for the database, Firebase Authentication for user authentication, and Firebase Storage for storing chat avatars.",
      sourceCode: "https://github.com/suhaybkaofficial/whatsappclone",
      liveDemo: "https://whatsappclone-seven.vercel.app/",
    },
    {
      id: 2,
      title: "Weather App 1.0",
      image: "https://i.ibb.co/J5zH6r9/weather.jpg",
      description: "Weather App 1.0: a web app with real-time weather info and forecasts. Built using Next.js, Tailwind CSS, and weatherapi.com API. Features include Context API, React Loading, Axios, React Icons, lodash.debounce, and localstorage. Experience seamless weather updates effortlessly.",
      sourceCode: "https://github.com/suhaybkaofficial/weatherapp",
      liveDemo: "https://weatherapp-six-topaz.vercel.app/",
    },
    {
        id: 3,
        title: "Tiktok Web Clone UI",
        image: "https://i.ibb.co/wBGpF18/tiktok.jpg",
        description: "Introducing a TikTok web UI clone in progress! This app, built with Next.js and styled with Tailwind CSS, incorporates Next Auth & Firebase for authentication. Experience React Loading for loading animations, react icons for icons, and TypeScript for enhanced development. Stay tuned for an immersive TikTok-like experience! ",
        sourceCode: "hhttps://github.com/suhaybkaofficial/tiktokclone",
        liveDemo: "https://tiktokclone-theta.vercel.app/",
      },
  ];

  return (
    <section className="resume-section" id="projects">
      <div className="project-showcase">
        <h1 className="section-title">Projects Showcase</h1>
        <div className="project-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="cta-buttons">
                  <a
                    href={project.sourceCode}
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.liveDemo}
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
