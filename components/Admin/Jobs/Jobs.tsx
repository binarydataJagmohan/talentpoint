import React from 'react';

export default function Jobs() {
    return (
        <>
       <div className='dash-right'>
            <h1>Jobs</h1>
            <div className='sort-d-flex mt-4'>
                <p className='sort-by mt-3 pt-1'>Sort By:</p>
                <select className='all-recent f-16-select'>
                    <option>Company Name</option>
                    <option>Company Name 2</option>
                    <option>Company Name 3</option>
                    <option>Company Name 4</option>
                </select>
            </div>
          <div className='tab-filter mt-4'>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Search Name <i className="fa-solid fa-pencil"></i></button>
                <button className="export" id="nav-export-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fa-solid fa-file-arrow-down"></i> Export as .xls</button>
                
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
                    <div className='filter'>
                        <div className='filter-sp'>
                            <p className='cat'>Software Engineer <i className="fa-solid fa-xmark"></i></p>
                            <p className='cat'>Dubai, United Arab Emirates <i className="fa-solid fa-xmark"></i></p>
                    </div>
                    <div className='filter-bottom'>
                            <p><i className="fa-solid fa-angles-down"></i> Filter</p>
                    </div>
                   </div>

                   <div className='filter filter-sp m-center mt-4'>
                        <div className='row'>
                            <div className='col-sm-1 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='logo-filter'  /> 
                            </div>
                            <div className='col-sm-8'>
                                <p className='p-18'>Software Engineer</p>
                                <p className='p-16'>Sony</p>
                                <button className='pro'>Featured <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/pro.png'} alt=" pro" className='w-25 '  /></button>  

                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-business-time"></i> Full-time </li>
                                    <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                                </ul>
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
                            </div>
                        </div>
                        <p className='posted'>Posted 5 days ago</p>
                   </div>

                   <div className='filter filter-sp m-center mt-4'>
                        <div className='row'>
                            <div className='col-sm-1 pr-0'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='logo-filter'  /> 
                            </div>
                            <div className='col-sm-8'>
                                <p className='p-18'>Software Engineer</p>
                                <p className='p-16'>Sony</p>
                                <button className='pro actively '>Actively Hiring <i className="fa-solid fa-circle-check"></i></button>  
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-business-time"></i> Full-time </li>
                                    <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                                </ul>
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
                            </div>
                        </div>
                        <p className='posted'>Posted 5 days ago</p>
                   </div>
                </div> 
 
            </div>
          </div>

        </div>
        </>
    )
}