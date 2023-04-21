import React from 'react';

export default function Dashboard() {
    return (
        <>
        <div className="dash-right"> 
            <h1>Welcome <span className='span-color'>Alan!</span></h1>
            <div className='row mt-4'>
                <div className='col-lg-3 col-md-6'>
                  <div className='dash-card d-c-1'>
                    <div className='row'>
                        <div className='col-4'>
                            <h5 className='dash-card-h5'>6</h5>
                        </div>
                        <div className='col-8'>
                            <div className='text-right'>
                                <h6>Applied Jobs</h6>
                                <p className='f-12'>View All</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='dash-card d-c-2'>
                    <div className='row'>
                        <div className='col-4'>
                            <h5 className='dash-card-h5'>6</h5>
                        </div>
                        <div className='col-8'>
                            <div className='text-right'>
                                <h6>Saved Jobs</h6>
                                <p className='f-12'>View All</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='dash-card d-c-4'>
                    <div className='row'>
                        <div className='col-4'>
                            <h5 className='dash-card-h5'>4</h5>
                        </div>
                        <div className='col-8'>
                            <div className='text-right'>
                                <h6>Messages</h6>
                                <p className='f-12'>View All</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='dash-card d-c-3'>
                    <div className='row'>
                        <div className='col-4'>
                            <h5 className='dash-card-h5'>3</h5>
                        </div>
                        <div className='col-8'>
                            <div className='text-right'>
                                <h6>Notifications</h6>
                                <p className='f-12'>View All</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <p className="over mt-4 mb-4">New Openings</p>

            <div className='row'>
                <div className='col-lg-8 col-md-12'>
                   <div className='filter filter-sp m-center '>
                        <div className='row'>
                            <div className='col-sm-2 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='logo-filter'  /> 
                            </div>
                            <div className='col-sm-6'>
                                <p className='p-18'>Software Engineer</p>
                                <p className='p-16 mt-1'>Microsoft</p>
                                <button className='pro'>Featured <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/pro.png'} alt=" pro" className='w-25 '  /></button>  
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-business-time"></i> Full-time </li>
                                    <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                                </ul>
                            </div>
                            <div className='col-sm-4'>
                            <button className="btn-a primary-size-16 btn-bg-0055BA w-100 tab-add-sp"><i className="fa-solid fa-bolt"></i> Apply Now</button> 
                            <button className="download mt-3 w-100"><i className="fa-regular fa-bookmark"></i> &nbsp; Save Job</button> 
                            </div>
                        </div> 
                   </div>
                   <div className='filter filter-sp m-center mt-4'>
                        <div className='row'>
                            <div className='col-sm-2 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='logo-filter'  /> 
                            </div>
                            <div className='col-sm-6'>
                                <p className='p-18'>Software Engineer</p>
                                <p className='p-16 mt-1'>Microsoft</p>
                                <button className="pro actively ">Actively Hiring <i className="fa-solid fa-circle-check"></i></button> 
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-business-time"></i> Full-time </li>
                                    <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                                </ul>
                            </div>
                            <div className='col-sm-4'>
                            <button className="btn-a primary-size-16 btn-bg-0055BA w-100 tab-add-sp"><i className="fa-solid fa-bolt"></i> Apply Now</button> 
                            <button className="download mt-3 w-100"><i className="fa-regular fa-bookmark"></i> &nbsp; Save Job</button> 
                            </div>
                        </div> 
                   </div>
                   <div className='filter filter-sp m-center mt-4'>
                        <div className='row'>
                            <div className='col-sm-2 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='logo-filter'  /> 
                            </div>
                            <div className='col-sm-6'>
                                <p className='p-18'>Software Engineer</p>
                                <p className='p-16 mt-1'>Microsoft</p> 
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-business-time"></i> Full-time </li>
                                    <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                                </ul>
                            </div>
                            <div className='col-sm-4'>
                            <button className="btn-a primary-size-16 btn-bg-0055BA w-100 tab-add-sp"><i className="fa-solid fa-bolt"></i> Apply Now</button> 
                            <button className="download mt-3 w-100"><i className="fa-regular fa-bookmark"></i> &nbsp; Save Job</button> 
                            </div>
                        </div> 
                   </div>

                   <center><p className='explore-jobs mt-4'> <a href="#">Explore All Jobs</a> </p></center>

                </div>
                <div className='col-lg-4 col-md-12'>
                <div className='profile-checklist'>
                    <div className='row'>
                        <div className='col-4 pr-0'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/profile-4.png'} alt="profile-4"  /> 
                        </div>
                        <div className='col-8'>
                            <h5>Profile Checklist</h5>
                            <h6>You're almost there!</h6>
                        </div>
                    </div>
                    <ul className='Verify'>
                        <li><i className="fa-regular fa-circle-check"></i> Verify you account</li>
                        <li><i className="fa-regular fa-circle-check"></i> Update your information</li>
                        <li><i className="fa-regular fa-circle-check"></i> Professional information</li>
                        <li><i className="fa-regular fa-circle-check"></i> Upload your resume</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Apply for to an opening</li>
                    </ul>
                    <button className="signup-cards white-btn f-22"><i className="fa-solid fa-lock"></i>Unlock Instant Apply </button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}