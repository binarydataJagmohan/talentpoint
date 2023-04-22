import React from 'react';

export default function SavedJobs() {
    return (
        <>
           <div className="dash-right"> 
            <h1>My <span className='span-color'> Jobs</span></h1>
            <div className='row m-column-reverse'>
                <div className='col-sm-7'>
                    <ul className='list-loc m-m-0 mt-4'> 
                        <li><a href="#">All</a></li>
                        <li  className='active '><a href="#">Saved <span className="tab-span-sa c-0070F5">12</span></a></li> 
                    </ul>
                </div>
                <div className='col-sm-5'>
                    <ul className='blue-text-line mt-4 text-right'> 
                        <li><a href="#">View Public Profile</a></li> 
                    </ul>
                </div>
            </div>
            
             <div className='data-management m-p-10'>
             <div className='tab-filter mt-4'>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Search Name <i className="fa-solid fa-pencil"></i></button>
                
                
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
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
                              <button className="btn-a primary-size-16 btn-bg-0055BA w-100">Apply Now</button>
                               <button className="download mt-2 w-100"><i className="fa-regular fa-bookmark"></i> &nbsp; Save Job</button>
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
                              <button className="btn-a primary-size-16 btn-bg-0055BA w-100">Apply Now</button>
                               <button className="download mt-2 w-100"><i className="fa-regular fa-bookmark"></i> &nbsp; Save Job</button>
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
                                <button className='pro actively hot'>Hot Job <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/hot.png'} alt="hot"/> </button>  
                                <ul className='full-time'>
                                    <li><i className="fa-solid fa-business-time"></i> Full-time </li>
                                    <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                                </ul>
                            </div>
                            <div className='col-sm-3'> 
                              <button className="btn-a primary-size-16 btn-bg-0055BA w-100">Apply Now</button>
                               <button className="download mt-2 w-100"><i className="fa-regular fa-bookmark"></i> &nbsp; Save Job</button>
                            </div>
                        </div>
                        <p className='posted'>Posted 5 days ago</p>
                   </div>
                   
                </div> 
 
            </div>
          </div>
             </div>
        </div>
        </>
    )
}