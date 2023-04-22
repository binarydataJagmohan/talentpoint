import React from 'react';

export default function Resume() {
    return (
        <>
          <div className="dash-right"> 
            <h1>My <span className='span-color'> Resume</span></h1>
                <div className='d-card'>
                    <div className='build-download'>
                        <h2>Build & download your professional resume in seconds — for FREE! </h2>
                        <div className='row'>
                            <div className='col-sm-3'>
                            <div className='slider-cv'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/cv.png'} alt="cv"  /> 
                            </div>
                            </div>
                            <div className='col-sm-9'>
                                <h5>Boost your chances of landing your dream job with our professional resume maker</h5>
                                <h5 className='blue-title mt-4'>How do I get it?</h5>
                                <p><b>Step 1:</b> Complete your online profile.</p>
                                <p><b>Step 2:</b> Select a design & click on generate PDF.</p>
                                <p><b>Step 3:</b> Save or print your new resume.</p>
                                <p><b>Step 4:</b> Start applying! </p>

                                <p className='start-now mt-3'><a href="#">Start Now <i className="fa-solid fa-angles-right"></i></a></p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-up up-down-icon"></i>
                    </div>

                    <div className='dash-card mt-5 '>
                        <div className='w-box bg-fff p-3'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <p className='f-18 w-600 mb-2'>Alan Moore-Resume.pdf</p>
                                    <p className='f-16 c-999999'>Uploaded on Feb 12</p>
                                </div>
                                <div className='col-sm-4 text-right'>
                                    <a href="#" className='default'>Default</a>&nbsp;&nbsp;
                                <i className="fa-regular fa-trash-can del-trash"></i>
                                </div>
                            </div>
                        </div>
                        <div className='w-box bg-fff mt-2 p-3'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <p className='f-18 w-600 mb-2'>Alan Moore-Resume.pdf</p>
                                    <p className='f-16 c-999999'>Uploaded on Feb 12</p>
                                </div>
                                <div className='col-sm-4 text-right'>
                                    <a href="#" className='set-default f-12'>Set Default</a>&nbsp;&nbsp;
                                <i className="fa-regular fa-trash-can del-trash"></i>
                                </div>
                            </div>
                        </div>

                        <div className='text-right'>
                            <div className="uploade-btn">
                                <input type="file" />
                                <span className="resume-text">Upload your recent Resume/CV:</span>
                                <button className="btn-a primary-size-16 btn-bg-0055BA mt-5 mb-4 mobile-m-0">
                                    <i className="fa-solid fa-upload"></i> Upload A New Photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </>
    )
}