import React from 'react';

export default function Employees() {
    return (
        <>
             <div className='dash-right'> 
             <h1>Candidates</h1>

             <div className='candidates-part'>
                <ul className='row-btn'>
                    <li><button className="tab-btn-dash active-blue">All (n)</button></li>
                    <li><button className="tab-btn-dash">Active (n)</button></li>
                    <li><button className="tab-btn-dash">Inactive (n)</button></li>
                    <li className="right-p"><button className="export "><i className="fa-solid fa-file-arrow-down"></i> Export as .xls</button></li>
                    
                </ul>
                <div className='filter filter-sp m-center mt-4'>
                        <div className='row'>
                            <div className='col-sm-2 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/user-p.png'} alt=" user-p" className='logo-filter w-100'  /> 
                            </div>
                            <div className='col-sm-7'>
                                <p className='p-18 blue-text mt-2'>Candidate Name</p>
                                <p className='p-16 black-text'>Current Role @Company-Name</p> 
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-location-dot"></i> Ready to Interview</li>
                                    <li><i className="fa-solid fa-business-time"></i> Dubai - UAE </li>
                                </ul>
                                <div className='sort-d-flex mt-3'>
                                    <p className='Status-by  '>Hiring Status:</p>
                                    <select className='all-Status '>
                                        <option>Shortlisted</option>
                                        <option>Shortlisted 2</option>
                                        <option>Shortlisted 3</option>
                                        <option>Shortlisted 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-sm-3'> 
                               <div className="dropdown">
                                    <button className="dropdown-toggle btn-a primary-size-16 btn-bg-0055BA" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-circle-chevron-down sp-right"></i> Dropdown button
                                    </button>
                                    <ul className="dropdown-menu view-right" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item item-1" href="#">View public profile</a></li>
                                        <li><a className="dropdown-item item-2" href="#">Contact information</a></li>
                                        <li><a className="dropdown-item item-3" href="#">Delete profile</a></li>
                                    </ul>
                                </div> 
                                <button className="download mt-4 w-100"><i className="fa-solid fa-download"></i> Download Resume</button>
                            </div>
                        </div>
                        <p className='posted'>Applied through Instant Apply!</p>
                </div>

                <div className='filter filter-sp m-center mt-2'>
                        <div className='row'>
                            <div className='col-sm-2 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/user-p.png'} alt=" user-p" className='logo-filter w-100'  /> 
                            </div>
                            <div className='col-sm-7'>
                                <p className='p-18 blue-text mt-2'>Candidate Name</p>
                                <p className='p-16 black-text'>Current Role @Company-Name</p> 
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-location-dot"></i> Ready to Interview</li>
                                    <li><i className="fa-solid fa-business-time"></i> Dubai - UAE </li>
                                </ul>
                                <div className='sort-d-flex mt-3'>
                                    <p className='Status-by  '>Hiring Status:</p>
                                    <select className='all-Status '>
                                        <option>Shortlisted</option>
                                        <option>Shortlisted 2</option>
                                        <option>Shortlisted 3</option>
                                        <option>Shortlisted 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-sm-3'> 
                               <div className="dropdown">
                                    <button className="dropdown-toggle btn-a primary-size-16 btn-bg-0055BA" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-circle-chevron-down sp-right"></i> Dropdown button
                                    </button>
                                    <ul className="dropdown-menu view-right" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item item-1" href="#">View public profile</a></li>
                                        <li><a className="dropdown-item item-2" href="#">Contact information</a></li>
                                        <li><a className="dropdown-item item-3" href="#">Delete profile</a></li>
                                    </ul>
                                </div> 
                                <button className="download mt-4 w-100"><i className="fa-solid fa-download"></i> Download Resume</button>
                            </div>
                        </div>
                        <p className='posted'>Applied through Instant Apply!</p>
                </div>

                <div className='filter filter-sp m-center mt-2'>
                        <div className='row'>
                            <div className='col-sm-2 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/user-p.png'} alt=" user-p" className='logo-filter w-100'  /> 
                            </div>
                            <div className='col-sm-7'>
                                <p className='p-18 blue-text mt-2'>Candidate Name</p>
                                <p className='p-16 black-text'>Current Role @Company-Name</p> 
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-location-dot"></i> Ready to Interview</li>
                                    <li><i className="fa-solid fa-business-time"></i> Dubai - UAE </li>
                                </ul>
                                <div className='sort-d-flex mt-3'>
                                    <p className='Status-by  '>Hiring Status:</p>
                                    <select className='all-Status '>
                                        <option>Shortlisted</option>
                                        <option>Shortlisted 2</option>
                                        <option>Shortlisted 3</option>
                                        <option>Shortlisted 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-sm-3'> 
                               <div className="dropdown">
                                    <button className="dropdown-toggle btn-a primary-size-16 btn-bg-0055BA" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-circle-chevron-down sp-right"></i> Dropdown button
                                    </button>
                                    <ul className="dropdown-menu view-right" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item item-1" href="#">View public profile</a></li>
                                        <li><a className="dropdown-item item-2" href="#">Contact information</a></li>
                                        <li><a className="dropdown-item item-3" href="#">Delete profile</a></li>
                                    </ul>
                                </div> 
                                <button className="download mt-4 w-100"><i className="fa-solid fa-download"></i> Download Resume</button>
                            </div>
                        </div>
                        <p className='posted'>Applied through Instant Apply!</p>
                </div>

                <div className='filter filter-sp m-center mt-2'>
                        <div className='row'>
                            <div className='col-sm-2 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/user-p.png'} alt=" user-p" className='logo-filter w-100'  /> 
                            </div>
                            <div className='col-sm-7'>
                                <p className='p-18 blue-text mt-2'>Candidate Name</p>
                                <p className='p-16 black-text'>Current Role @Company-Name</p> 
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-location-dot"></i> Ready to Interview</li>
                                    <li><i className="fa-solid fa-business-time"></i> Dubai - UAE </li>
                                </ul>
                                <div className='sort-d-flex mt-3'>
                                    <p className='Status-by  '>Hiring Status:</p>
                                    <select className='all-Status '>
                                        <option>Shortlisted</option>
                                        <option>Shortlisted 2</option>
                                        <option>Shortlisted 3</option>
                                        <option>Shortlisted 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-sm-3'> 
                               <div className="dropdown">
                                    <button className="dropdown-toggle btn-a primary-size-16 btn-bg-0055BA" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-circle-chevron-down sp-right"></i> Dropdown button
                                    </button>
                                    <ul className="dropdown-menu view-right" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item item-1" href="#">View public profile</a></li>
                                        <li><a className="dropdown-item item-2" href="#">Contact information</a></li>
                                        <li><a className="dropdown-item item-3" href="#">Delete profile</a></li>
                                    </ul>
                                </div> 
                                <button className="download mt-4 w-100"><i className="fa-solid fa-download"></i> Download Resume</button>
                            </div>
                        </div>
                        <p className='posted'>Applied through Instant Apply!</p>
                </div>
             </div>
        </div>
        </>
    )
}