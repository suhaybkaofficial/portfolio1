import React from 'react'

function Education() {
    return (
        <div>
            <section className="resume-section" id="education">
    <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">Üsküdar University</h3>
                <div className="subheading mb-3">Master's Degree </div>
                <div>Computer Engineering</div>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">October 2021 - Present</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h3 className="mb-0">University of Hargeisa</h3>
                <div className="subheading mb-3">Bachelor's Degree</div>
                <div>Computing & IT</div>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">September 2015 - August 2019</span></div>
        </div>
      <br />
      <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h3 className="mb-0">Al-Jazeera Secondary School</h3>
                <div className="subheading mb-3">GCSE High School Degree</div>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">September 2011 - August 2015</span></div>
        </div>
    </div>
</section>
<hr className="m-0" />
        </div>
    )
}

export default Education
