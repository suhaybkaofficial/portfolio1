import React from "react";

function Skills() {
  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item" style={{ color: "#e46226" }}>
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item" style={{ color: "#2449d8" }}>
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item" style={{ color: "#ead41c" }}>
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item" style={{ color: "#00d8ff" }}>
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item" style={{ color: "#89bb3c" }}>
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item" style={{ color: "#6c7eb7" }}>
              <i class="fa-brands fa-php"></i>
            </li>
            <li className="list-inline-item" style={{ color: "#c76494" }}>
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item" style={{ color: "#1f6f93" }}>
              <i className="fab fa-wordpress"></i>
            </li>
            {/* create a custom color of bootstrap  */}
            <li className="list-inline-item " style={{ color: "#8210f5" }}>
              <i className="fab fa-bootstrap"></i>
            </li>
            <li
              className="list-inline-item text-info"
              style={{ color: "#005c83" }}
            >
              <i class="devicon-mysql-plain"></i>
            </li>
            <li className="list-inline-item " style={{ color: "#ff7362" }}>
              <i className="fab fa-figma"></i>
            </li>
            <div className="list-inline-item">
              <i class="devicon-photoshop-plain colored"></i>
            </div>
            <li className="list-inline-item text-dark">
              <i class="fa-brands fa-github"></i>
            </li>
            <li className="list-inline-item text-danger">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item ">
              <i class="devicon-nextjs-original colored"></i>
            </li>
            <li className="list-inline-item">
              <i class="devicon-firebase-plain colored"></i>
            </li>
            <div className="list-inline-item">
              <i class="devicon-tailwindcss-plain colored"></i>
            </div>
            <div className="list-inline-item">
              <i class="devicon-googlecloud-plain colored"></i>
            </div>
            <div className="list-inline-item">
              <i class="devicon-jest-plain colored"></i>
            </div>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default Skills;
