import React from "react";

function Work() {
  return (
    <div>
      <section className="resume-section" id="work">
        <div className="resume-section-content">
          <h2 className="mb-5">Work</h2>
          <div className="subheading mb-3">Some of my projects</div>
          <div className=" px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <a href="https://razeenapp.co/" rel="noreferrer" target="_blank"className="flex w-full   md:w-1/2 cursor-pointer hover:scale-110 shadow-4xl transition-all  flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/MGdqrhp/Razeen.jpg"
                  />
                </div>
              </a>
              <a href="https://paybesa.com" rel="noreferrer" target="_blank" className="flex w-full  md:w-1/2 cursor-pointer hover:scale-110 shadow-4xl transition-all flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/wp4T7v0/Paybesa.jpg"
                  />
                </div>
              </a>
              <a href="https://qalam.so" rel="noreferrer" target="_blank" className="flex w-full  md:w-1/2 cursor-pointer hover:scale-110 shadow-4xl transition-all flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/H7QR9GF/Qalam-Parental.jpg"
                  />
                </div>
              </a>
              <a href="https://razeenonline.com" rel="noreferrer" target="_blank" className="flex w-full  md:w-1/2 cursor-pointer hover:scale-110 shadow-4xl transition-all flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/WK9GDK3/Razeenonline.jpg"
                  />
                </div>
              </a>
              <a href="https://caalamkajaban.com" rel="noreferrer" target="_blank" className="flex w-full  md:w-1/2 cursor-pointer hover:scale-110 shadow-4xl transition-all flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/3kJ91m2/Caalamkajaban.jpg"
                  />
                </div>
              </a>
              <a href="http://truecabletv.com:81/" rel="noreferrer" target="_blank" className="flex w-full  md:w-1/2 cursor-pointer hover:scale-110 shadow-4xl transition-all flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/sCDCPyC/truecabletv.jpg"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default Work;
