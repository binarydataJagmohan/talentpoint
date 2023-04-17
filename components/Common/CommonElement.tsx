import React, {useState, useEffect} from 'react';

export default function CommonElement() {
    const [belliconshow, setBellIconShow] = useState(false);
    const showBellIconOnclick = (showVal: any) => { 
        setBellIconShow(showVal);
    }

    const [belliconshow2, setBellIconShow2] = useState(false);
    const showBellIconOnclick2 = (showVal: any) => { 
        setBellIconShow2(showVal);
    }
    return (
        <>
     <div className='btn-bg-747474'> 

     <header className='head-part mt-5'>  
     <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo.png'} alt="logo" className='logo-head'/></a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
                 <i className="fa-solid fa-x close-x"></i>
            </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-lg-0">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">JOBS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">CAREER TIPS</a>
                </li> 
                <li className="nav-item">
                <a className="nav-link" href="#">ABOUT</a>
                </li> 
                <li className="nav-item">
                <a className="nav-link" href="#">FOR EMPLOYERS</a>
                </li> 
            </ul>
            <form className="d-flex mobile-single"> 
            <button className="btn login mobile-w-100" type="submit">Log In</button>
            <button className="btn signup mobile-w-100" type="submit">Sign Up</button>
            </form>
            </div>
        </div>
        </nav>  
</header>

<header className='head-part mt-5'>  
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo.png'} alt="logo" className='logo-head'/></a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-x close-x"></i>
            </span>
            </button>
            <div className="collapse navbar-collapse j-end " id="navbarSupportedContent"> 
            <form className="d-flex mobile-single "> 
            <div className='search-in'>
                <input className="form-control me-2" type="search" placeholder="Search for jobs, companies or location" aria-label="Search" /> 
                <i className="fa-solid fa-magnifying-glass glass-ser"></i>
            </div>
            <div className='dask-tab-mobile-d-flex'>
                <p className='head-icon notifications'>
                {belliconshow
                    ?
                        <>
                            <a href="#" className='fill-bell' onClick={(e) => showBellIconOnclick(false)}><i className="fa-solid fa-bell fill-bell"></i></a>
                            <div className='box-noti'>
                                <div className='bell-box'>
                                    <div className='row'>
                                        <div className='col-7'>
                                            <h4 className='not-title'>Notifications</h4>
                                        </div>
                                        <div className='col-5'></div>
                                    </div>
                                </div>
                                <i className="fa-solid fa-bell-slash"></i>
                                <h5>No New Notifications</h5>
                                <p>Check this section for job updates, and general notifications.</p>
                            </div>
                        </>
                    :
                        <a href="#" onClick={(e) => showBellIconOnclick(true)}><i className="fa-regular fa-bell"></i></a>
                } 
                 
                </p>
                <p className='user-img'>
                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-40' />
                </p>
                <p className='head-icon  dots-three'>
                <a href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                </p>
            </div>
            </form>
            </div>
        </div>
    </nav>  
</header>

<header className='head-part mt-5'>  
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo.png'} alt="logo" className='logo-head'/></a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-x close-x"></i>
            </span>
            </button>
            <div className="collapse navbar-collapse j-end " id="navbarSupportedContent"> 
            <form className="d-flex mobile-single "> 
            <div className='search-in'>
                <input className="form-control me-2" type="search" placeholder="Search for jobs, companies or location" aria-label="Search" /> 
                <i className="fa-solid fa-magnifying-glass glass-ser"></i>
            </div>
            <div className='dask-tab-mobile-d-flex'>
                <p className='head-icon notifications'>
                {belliconshow2
                    ?
                        <>
                            <a href="#" onClick={(e) => showBellIconOnclick2(false)}><i className="fa-solid fa-bell fill-bell"></i><span className='round-bell'></span></a>
                            <div className='box-noti'>
                                <div className='bell-box'>
                                    <div className='row'>
                                        <div className='col-7'>
                                            <h4 className='not-title'>Notifications</h4>
                                        </div>
                                        <div className='col-5'><p className='mark-as'>Mark as Read</p></div>
                                    </div>

                                    <div className='row mt-4'>
                                        <div className='col-2 pr-0'>
                                          <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-24'/>
                                        </div>
                                        <div className='col-10 text-left pl-0'>
                                            <p className='f-16'><b>Company XYZ</b> posted an opening!</p>
                                            <p className='f-12'>Just now</p>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-2 pr-0'>
                                          <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-24'/>
                                        </div>
                                        <div className='col-10 text-left pl-0'>
                                            <p className='f-16'><b>Company XYZ</b> posted an opening!</p>
                                            <p className='f-12'>Just now</p>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-2 pr-0'>
                                          <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-24'/>
                                        </div>
                                        <div className='col-10 text-left pl-0'>
                                            <p className='f-16'><b>Company XYZ</b> posted an opening!</p>
                                            <p className='f-12'>Just now</p>
                                        </div>
                                    </div>

                                    <p><a href="#" className='view-all'>View All</a></p>
                                </div>
                                 
                            </div>
                        </>
                    :
                        <a href="#" onClick={(e) => showBellIconOnclick2(true)}><i className="fa-regular fa-bell"></i><span className='round-bell'></span></a>
                } 
                 
                </p>
                <p className='user-img'>
                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-40' />
                </p>
                <p className='head-icon  dots-three'>
                <a href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                </p>
            </div>
            </form>
            </div>
        </div>
    </nav>  
</header>

<footer className='bg-white mt-5'>
    <div className='footer-part'>
        <div className='container'>
            <div className='row'>
            <div className='col-sm-4'>
            <a href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo.png'} alt="logo" className='logo-ft'/></a>
            </div>
            <div className='col-sm-8'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <h5>For Candidates</h5>
                        <h5>For Employers</h5>
                    </div>
                    <div className='col-sm-3'>
                        <h5>Quick Links</h5> 
                        <ul className='ft-list'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Insights</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Releases</a></li> 
                        </ul>
                    </div>
                    <div className='col-sm-3'>
                        <h5>Company</h5> 
                        <ul className='ft-list'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Updates</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Partners</a></li> 
                        </ul>
                    </div>
                    <div className='col-sm-3'>
                        <h5>Support</h5>
                        <ul className='ft-list'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy Policy</a></li> 
                        </ul> 
                    </div>
                </div>
            </div>
            </div>
        </div>
 </div>
</footer>
<footer className='last-footer'>
    <div className='container'>
        <div className='row mobile-reverse'>
            <div className='col-sm-8'>
                <p className='copy-text'>© 2023 The Talent Point. All rights reserved</p>
            </div>
            <div className='col-sm-4'>
               <ul className='social-icons'>
               <li><a href="#" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
               <li><a href="#" target='_blank'><i className="fa-brands fa-twitter"></i></a></li>
               <li><a href="#" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
               </ul>
            </div>
        </div>
    </div>
</footer>

        <div className='container width-1400 mt-5'>
            <div className='row'>
                <div className='col-lg-3 col-md-6'>
                    <button className='signup-cards white-btn'><i className="fa-solid fa-magnifying-glass"></i> Looking for A Job </button>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <button className='signup-cards blue-btn'><i className="fa-solid fa-magnifying-glass"></i> Looking for A Job </button>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <button className='signup-cards white-btn'><i className="fa-solid fa-bag-shopping"></i> Hiring New Talent</button>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <button className='signup-cards blue-btn'><i className="fa-solid fa-bag-shopping"></i> Hiring New Talent</button>
                </div>
            </div> 

        </div>

        <div className='container   mt-5'> 
             <div className='row mt-5'>
                <div className='col-lg-4 col-md-6 mb-4'>
                  <div className='toast-box'>
                    <div className='toast-head'>
                        <div className='row'>
                            <div className='col-9'>
                                <h5>Heading</h5>
                            </div>
                            <div className='col-3 text-right'>
                                <i className="fa-solid fa-xmark xmark-icon"></i> 
                            </div>
                        </div> 
                    </div>
                    <div className='toast-body'>
                         <p>Body with context</p>
                         <p className='mt-2'><a href="#" className='link-12'>Link</a></p>
                    </div>
                    <div className='toast-footer'>
                        <div className='row'>
                            <div className='col-7'>
                                <h5>Body with context</h5>
                            </div>
                            <div className='col-5 text-right'>
                            <p><a href="#" className='link-12'>Link</a> <i className="fa-solid fa-xmark xmark-icon"></i></p>  
                            </div>
                        </div> 
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                  <div className='toast-box color-0C5A14'>
                    <div className='toast-head'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='row'>
                                   <div className='col-1 p-r'><h5><i className="fa-solid fa-circle-check"></i> </h5></div>
                                   <div className='col-10 '><h5>Heading</h5></div>
                                </div> 
                            </div>
                            <div className='col-3 text-right'>
                                <i className="fa-solid fa-xmark xmark-icon"></i> 
                            </div>
                        </div> 
                    </div>
                    <div className='toast-body '>
                        <div className='left-sp-alt'>
                            <p>Body with context</p>
                            <p className='mt-2'><a href="#" className='link-12'>Link</a></p>
                         </div>
                    </div>
                    <div className='toast-footer'>
                        <div className='row'>
                            <div className='col-7'>
                                <h5><i className="fa-solid fa-circle-check"></i>  Body with context</h5>
                            </div>
                            <div className='col-5 text-right'>
                            <p><a href="#" className='link-12'>Link</a> <i className="fa-solid fa-xmark xmark-icon"></i></p>  
                            </div>
                        </div> 
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                  <div className='toast-box color-D04E4F'>
                    <div className='toast-head'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='row'>
                                   <div className='col-1 p-r'><h5><i className="fa-solid fa-circle-xmark"></i> </h5></div>
                                   <div className='col-10 '><h5>Heading</h5></div>
                                </div> 
                            </div>
                            <div className='col-3 text-right'>
                                <i className="fa-solid fa-xmark xmark-icon"></i> 
                            </div>
                        </div> 
                    </div>
                    <div className='toast-body '>
                        <div className='left-sp-alt'>
                            <p>Body with context</p>
                            <p className='mt-2'><a href="#" className='link-12'>Link</a></p>
                         </div>
                    </div>
                    <div className='toast-footer'>
                        <div className='row'> 
                            <div className='col-7'>
                                <h5><i className="fa-solid fa-circle-xmark"></i>  Body with context</h5>
                            </div>
                            <div className='col-5 text-right'>
                            <p><a href="#" className='link-12'>Link</a> <i className="fa-solid fa-xmark xmark-icon"></i></p>  
                            </div>
                        </div> 
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                  <div className='toast-box color-0055BA'>
                    <div className='toast-head'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='row'>
                                   <div className='col-1 p-r'><h5><i className="fa-solid fa-circle-info"></i>  </h5></div>
                                   <div className='col-10 '><h5>Heading</h5></div>
                                </div> 
                            </div>
                            <div className='col-3 text-right'>
                                <i className="fa-solid fa-xmark xmark-icon"></i> 
                            </div>
                        </div> 
                    </div>
                    <div className='toast-body '>
                        <div className='left-sp-alt'>
                            <p>Body with context</p>
                            <p className='mt-2'><a href="#" className='link-12'>Link</a></p>
                         </div>
                    </div>
                    <div className='toast-footer'>
                        <div className='row'> 
                            <div className='col-7'>
                                <h5><i className="fa-solid fa-circle-info"></i>   Body with context</h5>
                            </div>
                            <div className='col-5 text-right'>
                            <p><a href="#" className='link-12'>Link</a> <i className="fa-solid fa-xmark xmark-icon"></i></p>  
                            </div>
                        </div> 
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                  <div className='toast-box color-D57B11'> 
                    <div className='toast-head'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='row'>
                                   <div className='col-1 p-r'><h5><i className="fa-solid fa-triangle-exclamation"></i> </h5></div>
                                   <div className='col-10 '><h5>Heading</h5></div>
                                </div> 
                            </div>
                            <div className='col-3 text-right'>
                                <i className="fa-solid fa-xmark xmark-icon"></i> 
                            </div>
                        </div> 
                    </div>
                    <div className='toast-body '>
                        <div className='left-sp-alt'>
                            <p>Body with context</p>
                            <p className='mt-2'><a href="#" className='link-12'>Link</a></p>
                         </div>
                    </div>
                    <div className='toast-footer'>
                        <div className='row'> 
                            <div className='col-7'>
                                <h5><i className="fa-solid fa-triangle-exclamation"></i>  Body with context</h5>
                            </div>
                            <div className='col-5 text-right'>
                            <p><a href="#" className='link-12'>Link</a> <i className="fa-solid fa-xmark xmark-icon"></i></p>  
                            </div>
                        </div> 
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='candidate-box'>
                        <div className='row'>
                            <div className='col-sm-3 pr-0'>
                               <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-32'/> 
                            </div>
                            <div className='col-sm-9 pl-0'>
                                <h6 className='name-user'>Alan Moore</h6>
                                <p className='interview'>Ready to Interview</p>
                            </div>
                        </div> 
                        <ul className='can-list'>
                            <li><a href="#"><i className="fa-solid fa-gear"></i> Settings</a></li>
                            <li><a href="#"><i className="fa-regular fa-bell"></i> Notifications</a></li>
                            <li><a href="#"><i className="fa-regular fa-life-ring"></i> Help</a></li>
                            <li className='log-out'><a href="#"><i className="fa-solid fa-right-from-bracket"></i> Log Out</a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className='dash-profile-img mb-4'>
                       <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-4.png'} alt="Avatars-4"  /> 
                       <a href="#"><i className="fa-solid fa-plus"></i></a>
                    </div>

                    <div className='dash-profile-img mb-4'>
                       <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2"  /> 
                       <a href="#"><i className="fa-solid fa-pen"></i></a>
                    </div>

                    <div className='dash-profile-img mb-4'>
                       <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-5.png'} alt="Avatars-5"  /> 
                       <a href="#"><i className="fa-solid fa-pen"></i></a>
                    </div>
 
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                  <div className="accordion" id="accordionExample">
                        <div className="up-down-item w-270">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-1.png'} alt="icon-1" className='w-16' /> Ready to Interview
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-1.png'} alt="icon-1" className='w-24' /> Ready to Interview</h5> 
                                    <p>Actively looking for openings & ready to interview.</p>
                                </div>
                                <div className="accordion-body f-D57B11">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-2.png'} alt="icon-2" className='w-24' /> Open to Offers</h5> 
                                    <p>Not actively looking but open to hear about new opportunities. </p>
                                </div>
                                <div className="accordion-body f-D04E4F">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-3.png'} alt="icon-3" className='w-24' /> Not Looking</h5> 
                                    <p>Not actively looking for opportunities right now.</p>
                                </div> 
                                </div>
                            </div>
                            
                        
                        </div>
                        </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                  <div className="accordion" id="accordionExample">
                        <div className="up-down-item w-270">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button c-D57B11" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-2.png'} alt="icon-2" className='w-24' /> Open to Offers
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-1.png'} alt="icon-1" className='w-24' /> Ready to Interview</h5> 
                                    <p>Actively looking for openings & ready to interview.</p>
                                </div>
                                <div className="accordion-body f-D57B11">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-2.png'} alt="icon-2" className='w-24' /> Open to Offers</h5> 
                                    <p>Not actively looking but open to hear about new opportunities. </p>
                                </div>
                                <div className="accordion-body f-D04E4F">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-3.png'} alt="icon-3" className='w-24' /> Not Looking</h5> 
                                    <p>Not actively looking for opportunities right now.</p>
                                </div> 
                                </div>
                            </div>
                            
                        
                        </div>
                        </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                  <div className="accordion" id="accordionExample">
                        <div className="up-down-item w-270">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button c-D04E4F" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-3.png'} alt="icon-3" className='w-24' /> Not Looking
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-1.png'} alt="icon-1" className='w-24' /> Ready to Interview</h5> 
                                    <p>Actively looking for openings & ready to interview.</p>
                                </div>
                                <div className="accordion-body f-D57B11">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-2.png'} alt="icon-2" className='w-24' /> Open to Offers</h5> 
                                    <p>Not actively looking but open to hear about new opportunities. </p>
                                </div>
                                <div className="accordion-body f-D04E4F">
                                    <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-3.png'} alt="icon-3" className='w-24' /> Not Looking</h5> 
                                    <p>Not actively looking for opportunities right now.</p>
                                </div> 
                                </div>
                            </div>
                            
                        
                        </div>
                        </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                  <div className='card-box'>
                    <button className='btn-app bg-D57B11-app' >Pending</button><br/>
                    <button className='btn-app bg-0055BA-app' >Under Review</button><br/>
                    <button className='btn-app bg-0055BA-app' >Reviewed</button><br/>
                    <button className='btn-app bg-3D9F79-app' >Shortlisted</button><br/>
                    <button className='btn-app bg-3D9F79-app  back-fill-3D9F79' >Selected</button><br/>
                    <button className='btn-app bg-D04E4F-app' >Declined</button><br/>
                    <button className='btn-app bg-bababa-app' >Closed</button><br/>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 mb-4'>
                  <div className='card-box'> 
                    <button className='btn-app bg-3D9F79-app' >ACTIVE</button><br/> 
                    <button className='btn-app bg-bababa-app' >Closed</button><br/>
                    <button className='btn-app bg-D04E4F-app' >Declined</button><br/>
                  </div>
  
                </div>

                <div className='col-lg-6 col-md-6 mb-4'>
                    <div className="accordion" id="accordionExample">
                            <div className="ready-to-in">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Ready to Interview 
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body"> 
                                        <p className='f-0055BA'><b>Ready to Interview:</b><br/> Actively looking for openings & ready to interview. <i className="fa-solid fa-check"></i></p>
                                        <p><b>Open to Offers:</b><br/> Not actively looking but open to hear about new opportunities. </p>
                                        <p><b>Not looking:</b><br/> Not actively looking for opportunities right now.</p>
                                    </div>
                                    
                                    </div>
                                </div> 
                            </div>
                        </div>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'> 
                 <div className='card-box'> 
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Upload Your Profile Picture
                    </button> 
                    <div className="modal fade modal-uploade" id="exampleModal"    aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Upload Your Profile Picture</h5> 
                            </div>
                            <div className="modal-body">
                             <div className='upload-file'>
                                <div className='file-up'>
                                  <input type="file" multiple/>
                                  <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/cemra.png'} alt="cemra" className='cemra'  /> 
                                </div> 
                                <p className='upload-text'>Browse and chose the files you want to upload from your computer.</p>
                                <p className='max-size'>Maximum upload size is 1MB</p>
                             </div>
                              <p className='pro-tip'><b>Pro Tip:</b> Choose a recent, clear headshot with good lighting and dress professionally. </p>
                              <p className='note'><b>Please Note </b> Avoid using casual or overly edited photos, as your profile picture is often the first impression potential employers have of you.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="cancel-btn" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="update-btn">Update</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <select className='sel-opt mt-4'>
                        <option>Ready to Interview</option>
                        <option>Ready to Interview 2</option>
                        <option>Ready to Interview 3</option>
                    </select> 

                </div>

                
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='profile-checklist'>
                    <div className='row'>
                        <div className='col-4 pr-0'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/profile-1.png'} alt="profile-1"  /> 
                        </div>
                        <div className='col-8'>
                            <h5>Profile Checklist</h5>
                            <h6>Keep Going!</h6>
                        </div>
                    </div>
                    <ul className='Verify'>
                        <li><i className="fa-regular fa-circle-check"></i> Verify you account</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Update your information</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Professional information</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Upload your resume</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Apply for to an opening</li>
                    </ul>
                    <button className="signup-cards white-btn f-22"><i className="fa-solid fa-lock"></i>Unlock Instant Apply </button>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='profile-checklist'>
                    <div className='row'>
                        <div className='col-4 pr-0'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/profile-2.png'} alt="profile-2"  /> 
                        </div>
                        <div className='col-8'>
                            <h5>Profile Checklist</h5>
                            <h6>Few steps to go!</h6>
                        </div>
                    </div>
                    <ul className='Verify'>
                        <li><i className="fa-regular fa-circle-check"></i> Verify you account</li>
                        <li><i className="fa-regular fa-circle-check"></i> Update your information</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Professional information</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Upload your resume</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Apply for to an opening</li>
                    </ul>
                    <button className="signup-cards white-btn f-22"><i className="fa-solid fa-lock"></i>Unlock Instant Apply </button>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='profile-checklist'>
                    <div className='row'>
                        <div className='col-4 pr-0'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/profile-3.png'} alt="profile-3"  /> 
                        </div>
                        <div className='col-8'>
                            <h5>Profile Checklist</h5>
                            <h6>A step closer!</h6>
                        </div>
                    </div>
                    <ul className='Verify'>
                        <li><i className="fa-regular fa-circle-check"></i> Verify you account</li>
                        <li><i className="fa-regular fa-circle-check"></i> Update your information</li>
                        <li><i className="fa-regular fa-circle-check"></i> Professional information</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Upload your resume</li>
                        <li className='dis'><i className="fa-regular fa-circle"></i> Apply for to an opening</li>
                    </ul>
                    <button className="signup-cards white-btn f-22"><i className="fa-solid fa-lock"></i>Unlock Instant Apply </button>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
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

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='profile-checklist'>
                    <div className='row'>
                        <div className='col-4 pr-0'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/profile-5.png'} alt="profile-5"  /> 
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
                        <li><i className="fa-regular fa-circle-check"></i> Apply for to an opening</li>
                    </ul>
                    <button className="signup-cards white-btn f-22"><i className="fa-solid fa-lock"></i>Unlock Instant Apply </button>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mb-4'>
                <div className='profile-checklist back-white'>
                    <div className='row'>
                        <div className='col-4 pr-0'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/profile-6.png'} alt="profile-6"  /> 
                        </div>
                        <div className='col-8'>
                            <h5>Profile Checklist</h5>
                            <h6>Way to go, Alan!</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3 pr-0'> 
                        </div>
                        <div className='col-9'>
                         <p className='unlocked-text'>You just unlocked:</p>
                        </div>
                    </div>
                   
                    <button className="signup-cards blue-btn f-22"><i className="fa-solid fa-unlock"></i>Unlock Instant Apply </button>
                </div>
              </div>
 
              <div className='col-lg-4 col-md-6 mb-4'> 
                 <div className='card-box'> 
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    Unsaved changes
                    </button> 
                    <div className="modal fade modal-uploade" id="exampleModal2"    aria-labelledby="exampleModal2Label" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content"> 
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-12 pr-0'>
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/alt.png'} alt="alt"  /> 
                                    </div>
                                    <div className='col-12'>
                                        <h5 className='Unsaved-text'>Unsaved changes</h5>
                                        <h6 className='discard'>Do you want to save or discard changes?</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="cancel-btn" data-bs-dismiss="modal">Discard</button>
                                <button type="button" className="update-btn">Save Changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>



             </div>   
            

        </div>

        <div className='container gap-btn mt-5'> 
        <div  className="row">
        <div className='col-lg-12'><center><h4>Size 22</h4></center></div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row"> 
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-22 btn-bg-0055BA'>Button</button>
                                     <p>btn-a primary-size-22 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-22 btn-bg-00387A'>Button</button>
                                     <p>btn-a primary-size-22 btn-bg-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-22 btn-bg-002552'>Button</button>
                                     <p>btn-a primary-size-22 btn-bg-002552</p>
                                </div>
                             </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-22 border-0055BA'>Button</button>
                                    <p>btn-a border-primary-size-22 border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-22 border-00387A'>Button</button>
                                    <p>btn-a border-primary-size-22 border-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-22 border-002552'>Button</button>
                                    <p>btn-a border-primary-size-22 border-002552</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-22 text-0070F5'>Button</button>
                                    <p>btn-a text-primary-size-22 text-0070F5</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-22 text-00387A'>Button</button>
                                    <p>btn-a text-primary-size-22 text-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-22 text-002552'>Button</button>
                                    <p>btn-a text-primary-size-22 text-002552</p>
                                </div>
                            </div> 
                        </div>
                    </div>
            </div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                           <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-22 btn-bg-fff'>Button</button>
                                    <p>btn-a primary-size-22 btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-22 btn-bg-CFE5FF'>Button</button>
                                    <p>btn-a primary-size-22 btn-bg-CFE5FF</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-22 btn-bg-99C8FF'>Button</button>
                                    <p>btn-a primary-size-22 btn-bg-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-22 border-fff'>Button</button>
                                    <p>btn-a border-primary-size-22 border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-22 border-CFE5FF'>Button</button>
                                    <p>btn-a border-primary-size-22 border-CFE5FF</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-22 border-99C8FF'>Button</button>
                                    <p>btn-a border-primary-size-22 border-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                           <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a text-primary-size-22 text-fff'>Button</button>
                                     <p>btn-a text-primary-size-22 text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-22 text-CFE5FF'>Button</button>
                                    <p>btn-a text-primary-size-22 text-CFE5FF</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-22 text-99C8FF'>Button</button>
                                    <p>btn-a text-primary-size-22 text-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                    </div>                
            </div>
        </div>
          
        <div  className="row mt-5">
        <div className='col-lg-12'><center><h4>Size 18</h4></center></div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-18 btn-bg-0055BA'>Button</button>
                                     <p>btn-a primary-size-18 btn-bg-0055BA</p> 
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-18 btn-bg-0055BA'>Button</button>
                                     <p>btn-a primary-size-18 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-18 btn-bg-002552'>Button</button>
                                     <p>btn-a primary-size-18 btn-bg-002552</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a border-primary-size-18 border-0055BA'>Button</button>
                                     <p>btn-a border-primary-size-18 border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a border-primary-size-18 border-00387A'>Button</button>
                                     <p>btn-a border-primary-size-18 border-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-18 border-002552'>Button</button>
                                    <p>btn-a border-primary-size-18 border-002552</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a text-primary-size-18 text-0070F5'>Button</button>
                                     <p>btn-a text-primary-size-18 text-0070F</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-18 text-00387A'>Button</button>
                                    <p>btn-a text-primary-size-18 text-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-18 text-002552'>Button</button>
                                    <p>btn-a text-primary-size-18 text-002552</p>
                                </div>
                            </div> 
                        </div>
                    </div>
            </div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                           <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-18 btn-bg-fff'>Button</button>
                                    <p>btn-a primary-size-18 btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-18 btn-bg-CFE5FF'>Button</button>
                                    <p>btn-a primary-size-18 btn-bg-CFE5FF</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-18 btn-bg-99C8FF'>Button</button>
                                    <p>btn-a primary-size-18 btn-bg-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-18 border-fff'>Button</button>
                                    <p>btn-a border-primary-size-18 border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-18 border-CFE5FF'>Button</button>
                                    <p>btn-a border-primary-size-18 border-CFE5FF</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-18 border-99C8FF'>Button</button>
                                    <p>btn-a border-primary-size-18 border-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                           <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-18 text-fff'>Button</button>
                                    <p>btn-a text-primary-size-18 text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-18 text-fff'>Button</button>
                                    <p>btn-a text-primary-size-18 text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-18 text-99C8FF'>Button</button>
                                    <p>btn-a text-primary-size-18 text-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                    </div>                
            </div>
        </div>

        <div  className="row mt-5">
        <div className='col-lg-12'><center><h4>Size 16 Border Radius</h4></center></div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 btn-bg-0055BA'>Button</button>
                                    <p>btn-a primary-size-16 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-16 btn-bg-00387A'>Button</button>
                                     <p>btn-a primary-size-16 btn-bg-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 btn-bg-002552'>Button</button>
                                    <p>btn-a primary-size-16 btn-bg-002552</p>
                                </div>
                            </div>
                         
                        
                         
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 border-0055BA'>Button</button>
                                    <p>btn-a border-primary-size-16 border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 border-00387A'>Button</button>
                                    <p>btn-a border-primary-size-16 border-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 border-002552'>Button</button>
                                    <p>btn-a border-primary-size-16 border-002552</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 text-0070F5'>Button</button>
                                    <p>btn-a text-primary-size-16 text-0070F5</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 text-00387A'>Button</button>
                                    <p>btn-a text-primary-size-16 text-00387A</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 text-002552'>Button</button>
                                    <p>btn-a text-primary-size-16 text-002552</p>
                                </div>
                            </div>
                         
                         
                         
                        </div>
                    </div>
            </div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 btn-bg-fff'>Button</button>
                                    <p>btn-a primary-size-16 btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 btn-bg-CFE5FF'>Button</button>
                                    <p>btn-a primary-size-16 btn-bg-CFE5FF</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 btn-bg-99C8FF'>Button</button>
                                    <p>btn-a primary-size-16 btn-bg-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a border-primary-size-16 border-fff'>Button</button>
                                     <p>btn-a border-primary-size-16 border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 border-CFE5FF'>Button</button>
                                    <p>btn-a border-primary-size-16 border-CFE5FF</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 border-99C8FF'>Button</button>
                                    <p>btn-a border-primary-size-16 border-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 text-fff'>Button</button>
                                    <p>btn-a text-primary-size-16 text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 text-fff'>Button</button>
                                    <p>btn-a text-primary-size-16 text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 text-99C8FF'>Button</button>
                                    <p>btn-a text-primary-size-16 text-99C8FF</p>
                                </div>
                            </div> 
                        </div>
                    </div>                
            </div>
        </div>


        <div  className="row mt-5">
        <div className='col-lg-12'><center><h4>Size 19 Border Radius</h4></center></div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                   <button className='btn-a primary-size-19 btn-bg-0055BA'>Button</button>
                                   <p>btn-a primary-size-19 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                   <button className='btn-a primary-size-19 btn-bg-002552'>Button</button>
                                   <p>btn-a primary-size-19 btn-bg-002552</p> 
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-19 border-0055BA'>Button</button>
                                    <p>btn-a border-primary-size-19 border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-19 border-002552'>Button</button>
                                    <p>btn-a border-primary-size-19 border-002552</p>     
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-19 text-0070F5'>Button</button>
                                    <p>btn-a text-primary-size-19 text-0070F5</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-19 text-00387A'>Button</button>
                                    <p>btn-a text-primary-size-19 text-00387A</p>
                                </div> 
                            </div>
                         
                          
                        </div>
                    </div>
            </div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-19 btn-bg-fff'>  Button</button>
                                    <p>btn-a primary-size-19 btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-19 btn-bg-99C8FF'>  Button</button>
                                    <p>btn-a primary-size-19 btn-bg-99C8FF</p>    
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-19 border-fff'>  Button</button>
                                    <p>btn-a border-primary-size-19 border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-19 border-99C8FF'>  Button</button>
                                    <p>btn-a border-primary-size-19 border-99C8F</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-19 text-fff'>  Button</button>
                                    <p>btn-a text-primary-size-19 text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-19 text-99C8FF'>  Button</button>
                                    <p>btn-a text-primary-size-19 text-99C8FF</p>     
                                </div> 
                            </div> 
                        </div>
                    </div>                
            </div>
        </div>

        <div  className="row mt-5">
        <div className='col-lg-12'><center><h4>Size 16  Border Radius</h4></center></div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-0 btn-bg-0055BA'>Button</button>
                                    <p>btn-a primary-size-16 b-0 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-0  btn-bg-002552'>Button</button>
                                    <p>btn-a primary-size-16 b-0  btn-bg-002552</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-0  border-0055BA'>Button</button>
                                    <p>btn-a border-primary-size-16 b-0  border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16  b-0  border-002552'>Button</button>
                                    <p>btn-a border-primary-size-16  b-0  border-002552</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-0  text-0070F5'>Button</button>
                                    <p>btn-a text-primary-size-16 b-0  text-0070F5</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-0   text-00387A'>Button</button>
                                    <p>btn-a text-primary-size-16 b-0   text-0038</p>
                                </div> 
                            </div> 
                        </div>
                    </div>
            </div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-0  btn-bg-fff'>  Button</button>
                                    <p>btn-a primary-size-16 b-0  btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-0  btn-bg-99C8FF'>  Button</button>
                                    <p>btn-a primary-size-16 b-0  btn-bg-99C8FF</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-0  border-fff'>  Button</button>
                                    <p>btn-a border-primary-size-16 b-0  border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                   <button className='btn-a border-primary-size-16 b-0  border-99C8FF'>  Button</button>
                                   <p>btn-a border-primary-size-16 b-0  border-99C8FF</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-0  text-fff'>  Button</button>
                                    <p>btn-a text-primary-size-16 b-0  text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                   <button className='btn-a text-primary-size-16 b-0  text-99C8FF'>  Button</button>
                                   <p>btn-a text-primary-size-16 b-0  text-99C8FF</p>
                                </div> 
                            </div> 
                        </div>
                    </div>                
            </div>
        </div>

        <div  className="row mt-5">
            <div className='col-lg-12'><center><h4>Size 16  Border Radius 2</h4></center> </div>
            <div className='col-lg-6 col-md-12'>                
                    
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-2 btn-bg-0055BA'>Button</button>
                                    <p>btn-a primary-size-16 b-2 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-16 b-2  btn-bg-002552'>Button</button>
                                     <p>btn-a primary-size-16 b-2  btn-bg-002552</p> 
                                </div> 
                            </div>  
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-2  border-0055BA'>Button</button>
                                    <p>btn-a border-primary-size-16 b-2  border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16  b-2  border-002552'>Button</button>
                                    <p>btn-a border-primary-size-16  b-2  border-002552</p> 
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-2  text-0070F5'>Button</button>
                                    <p>btn-a text-primary-size-16 b-2  text-0070F</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                   <button className='btn-a text-primary-size-16 b-2   text-00387A'>Button</button>
                                   <p>btn-a text-primary-size-16 b-2   text-00387A</p> 
                                </div> 
                            </div> 
                        </div>
                    </div>
            </div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-2  btn-bg-fff'>  Button</button>
                                    <p>btn-a primary-size-16 b-2  btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-2  btn-bg-99C8FF'>  Button</button>
                                    <p>btn-a primary-size-16 b-2  btn-bg-99C8FF</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-2  border-fff'>  Button</button>
                                    <p>btn-a border-primary-size-16 b-2  border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-2  border-99C8FF'>  Button</button>
                                    <p>btn-a border-primary-size-16 b-2  border-99C8FF</p> 
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-2  text-fff'>  Button</button>
                                    <p>btn-a text-primary-size-16 b-2  text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-2  text-99C8FF'>  Button</button>
                                    <p>btn-a text-primary-size-16 b-2  text-99C8FF</p>
                                </div> 
                            </div>
                         
                          
                        </div>
                    </div>                
            </div>
        </div>

        <div  className="row mt-5">
            <div className='col-lg-12'><center><h4>Size 16  Border Radius 4</h4></center> </div>
            <div className='col-lg-6 col-md-12'>                   
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-4 btn-bg-0055BA'>Button</button>
                                    <p>btn-a primary-size-16 b-4 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-4  btn-bg-002552'>Button</button>
                                    <p>btn-a primary-size-16 b-4  btn-bg-002552</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-4  border-0055BA'>Button</button>
                                    <p>btn-a border-primary-size-16 b-4  border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                   <button className='btn-a border-primary-size-16  b-4  border-002552'>Button</button>
                                   <p>btn-a border-primary-size-16  b-4  border-002552</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a text-primary-size-16 b-4  text-0070F5'>Button</button>
                                     <p>btn-a text-primary-size-16 b-4  text-0070F5</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-4   text-00387A'>Button</button>
                                    <p>btn-a text-primary-size-16 b-4   text-00387A</p>
                                </div> 
                            </div> 
                        </div>
                    </div>
            </div>
            <div className='col-lg-6 col-md-12'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-4  btn-bg-fff'>  Button</button>
                                    <p>btn-a primary-size-16 b-4  btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-16 b-4  btn-bg-99C8FF'>  Button</button>
                                     <p>btn-a primary-size-16 b-4  btn-bg-99C8FF</p>
                                </div> 
                            </div> 
                        </div>

                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-4  border-fff'>  Button</button>
                                    <p>btn-a border-primary-size-16 b-4  border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16 b-4  border-99C8FF'>  Button</button>
                                    <p>btn-a border-primary-size-16 b-4  border-99C8FF</p>
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-4  text-fff'>  Button</button>
                                    <p>btn-a text-primary-size-16 b-4  text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-16 b-4  text-99C8FF'>  Button</button>
                                    <p>btn-a text-primary-size-16 b-4  text-99C8F</p> 
                                </div> 
                            </div> 
                        </div>
                    </div>                
            </div>
        </div>

        <div  className="row mt-5">
            <div className='col-lg-6 col-md-12'> 
              <center><h4>Size 13  Border Radius 4</h4></center>                   
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-13 b-4  btn-bg-fff'>  Button</button>
                                    <p>btn-a primary-size-13 b-4  btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a primary-size-13 b-4  btn-bg-99C8FF'>  Button</button>
                                     <p>btn-a primary-size-13 b-4  btn-bg-99C8FF</p> 
                                </div> 
                            </div> 
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                     <button className='btn-a border-primary-size-13 b-4  border-fff'>  Button</button>
                                     <p>btn-a border-primary-size-13 b-4  border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-13 b-4  border-99C8FF'>  Button</button>
                                    <p>btn-a border-primary-size-13 b-4  border-99C8FF</p>
                                </div> 
                            </div>
                        
                          
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-13 b-4  text-fff'> Button</button>
                                    <p>btn-a text-primary-size-13 b-4  text-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a text-primary-size-13 b-4  text-99C8FF'>  Button</button>
                                    <p>btn-a text-primary-size-13 b-4  text-99C8FF</p>
                                </div> 
                            </div>
                         
                          
                        </div>
                    </div> 
            </div>
            <div className='col-lg-6 col-md-12'>
             <center><h4>Size 16  Border Radius 4</h4></center> 
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-4 btn-bg-0055BA'><i className="fa-regular fa-square"></i> Button</button>
                                    <p>btn-a primary-size-16 b-4 btn-bg-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-16 b-4  btn-bg-002552'><i className="fa-regular fa-square"></i> Button</button>
                                    <p>btn-a primary-size-16 b-4  btn-bg-002552</p> 
                                </div> 
                            </div>
                         
                         
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                  <button className='btn-a border-primary-size-16 b-4  border-0055BA'><i className="fa-regular fa-square"></i> Button</button>
                                  <p>btn-a border-primary-size-16 b-4  border-0055BA</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-16  b-4  border-002552'><i className="fa-regular fa-square"></i> Button</button>
                                    <p>btn-a border-primary-size-16  b-4  border-002552</p>
                                </div> 
                            </div> 
                        </div> 
                    </div>              
            </div>
        </div>


                <center><h4>Size 13  Border Radius 4 icon</h4></center>                   
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-13 b-4  btn-bg-fff'><i className="fa-regular fa-square"></i>  Button</button>
                                    <p>btn-a primary-size-13 b-4  btn-bg-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a primary-size-13 b-4  btn-bg-99C8FF'><i className="fa-regular fa-square"></i>  Button</button>
                                    <p>btn-a primary-size-13 b-4  btn-bg-99C8FF</p> 
                                </div> 
                            </div>
                         
                         
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-13 b-4  border-fff'><i className="fa-regular fa-square"></i>  Button</button>
                                    <p>btn-a border-primary-size-13 b-4  border-fff</p>
                                </div>
                                <div className='col-sm-4 col-12'>
                                    <button className='btn-a border-primary-size-13 b-4  border-99C8FF'> <i className="fa-regular fa-square"></i> Button</button>
                                    <p>btn-a border-primary-size-13 b-4  border-99C8FF</p> 
 
                                </div>
                            </div>
                         
                         
                        </div> 
                    </div> 

                    <br/><br/>

                    {/* Master - Input Fields & Dropdowns */}
                    <div className='fields-and-dropdowns'>
                        <center><h4>Master - Input Fields & Dropdowns</h4></center><br/>
                        <div className='row'>
                            <div className='col-lg-4 col-md-12'>
                                <div className='fields-form mt-4'>

                                    <div className="form-part">
                                    <input type="text" placeholder='Placeholder' className='fields'/> 
                                    </div>

                                    <div className="form-part  d-flex-icons">
                                    <input type="text" placeholder='Placeholder' className='fields right-sp'/> 
                                    <i className="fa-regular fa-eye eye-icon"></i>
                                    </div>

                                    <div className="form-part"> 
                                    <select className='fields'>
                                        <option>Placeholder</option>
                                        <option>Placeholder</option>
                                    </select> 
                                    </div>

                                    <div className="form-part d-flex-icons">
                                    <i className="fa-solid fa-magnifying-glass  glass-search"></i>
                                        <input type="text" placeholder='Placeholder' className='fields left-sp '/> 
                                    </div>
                                    <div className="form-part d-flex-icons">
                                    <i className="fa-solid fa-magnifying-glass  glass-search"></i>
                                        <input type="text" placeholder='Placeholder' className='fields left-sp right-sp'/> 
                                    <i className="fa-regular fa-eye eye-icon"></i>
                                    </div>

                                    <div className="form-part"> 
                                    <textarea placeholder='Placeholder' className='fields'></textarea>
                                    </div>

                                    <div className="form-part">
                                    <input type="text" placeholder='Placeholder' className='fields'/> 
                                    </div>
                
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12'> 
                            <div className='form-input mt-4'> 
                                    <label>Label</label>
                                    <input type="text" placeholder='Placeholder' className='big-input'/> 

                                    <label>Label</label>
                                    <input type="text" placeholder='Placeholder' className='medium-input'/>

                                    <label>Label</label>
                                    <input type="text" placeholder='Placeholder' className='small-input'/>
                            </div>
                            </div>
                            <div className='col-lg-4 col-md-12'>
                                <div className='form-card-box mt-4'>
                                    <div className='input-place'>
                                        <div className="form-master-field">
                                        <input type="text" placeholder='Placeholder' className='master-fields border-0'/> 
                                        </div>

                                        <div className="form-master-field dflex">
                                        <input type="text" placeholder='Placeholder' className='master-fields border-0'/> 
                                        <div className='box-tag'>12</div>
                                        </div>

                                        <div className="form-master-field dflex">
                                        <div className='box-tag'>12</div>
                                        <input type="text" placeholder='Placeholder' className='master-fields border-0'/> 
                                        </div>

                                        <div className="form-master-field dflex ">
                                        <input type="checkbox" placeholder='Placeholder' className='master-fields checkbox border-0'/>
                                        <label className='check-label'>Placeholder</label>
                                        </div>
                                    </div> 
                                </div>  
                            </div>

                            <div className='col-lg-4 col-md-12'>
                                <div className='form-card-box mt-4'>
                                    <div className='input-place'>
                                        <div className="form-master-field">
                                          <input type="text" placeholder='Placeholder' className='master-fields border-0 pad-sp'/> 
                                        </div>
                                        
                                        <div className="form-master-field">
                                          <input type="text" placeholder='Placeholder' className='master-fields border-0 pad-sp bg-F9F9F9'/> 
                                        </div>

                                        <div className="form-master-field">
                                          <input type="text" placeholder='Placeholder' className='master-fields border-0 pad-sp'/> 
                                        </div>
                                    </div> 
                                </div>  
                            </div>
                        </div>
                    </div> 


                <div className='card-box'>
                    <center><h4>Dashboard Tabs</h4></center>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 12</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn'>Tab</button>
                        <p>tab-btn</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn'>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-span tab-left-sp</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn'><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-span tab-left-sp</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn'>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn   </p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 12 color #0055BA</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA'>Tab</button>
                        <p>tab-btn tab-0055BA </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA'>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-0055BA</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA '><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-0055BA </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA' >Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-0055BA</p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 12 color #0055BA</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA tab-border'>Tab</button>
                        <p>tab-btn tab-0055BA tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA tab-border'>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-0055BA tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA tab-border '><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-0055BA tab-border </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-0055BA tab-border'>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-0055BA tab-border </p>
                     </div>
                    </div>

                        {/* disabled Btn */}
                        <br/>
                        <br/>
                        <center>  <h3>Disabled Buttons</h3></center>
                        <br/>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <center><h4>Disabled Tab Font 12 color #BABABA</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-bababa' disabled>Tab</button>
                        <p>tab-btn tab-bababa</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-bababa' disabled>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-span tab-bababa</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-bababa' disabled><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-span tab-bababa</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-bababa' disabled>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn   </p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 12 color #747474</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474' disabled>Tab</button>
                        <p>tab-btn tab-747474 </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474' disabled>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-747474</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474 ' disabled><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-747474 </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474' disabled>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-747474</p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 12 Tab Border color #747474</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474 tab-border' disabled>Tab</button>
                        <p>tab-btn tab-747474 tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474 tab-border' disabled>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-747474 tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474 tab-border ' disabled><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-747474 tab-border </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-747474 tab-border' disabled>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-747474 tab-border </p>
                     </div>
                    </div>

                    {/* Font 11 tabs   */}

                    <div className='row mt-5'>
                        <div className='col-sm-12 mt-5'>
                            <center><h2>Tab Font 11</h2></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11'>Tab</button>
                        <p>tab-btn tab-f-11</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11'>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-span tab-left-sp</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11'><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-span tab-left-sp</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11'>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-f-11   </p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 11 color #0055BA</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA'>Tab</button>
                        <p>tab-btn tab-f-11 tab-0055BA </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA'>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-f-11 tab-0055BA</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA '><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-f-11 tab-0055BA </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA' >Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-f-11 tab-0055BA</p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 11 color #0055BA</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA tab-border'>Tab</button>
                        <p>tab-btn tab-f-11 tab-0055BA tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA tab-border'>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-f-11 tab-0055BA tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA tab-border '><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-f-11 tab-0055BA tab-border </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11 tab-0055BA tab-border'>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-f-11 tab-0055BA tab-border </p>
                     </div>
                    </div>

                    {/* disabled Btn */}
                    <br/>
                        <br/>
                        <center>  <h3>Disabled Buttons</h3></center>
                        <br/>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <center><h4>Disabled Tab Font 11 color #BABABA</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-bababa' disabled>Tab</button>
                        <p>tab-btn tab-f-11  tab-bababa</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-bababa' disabled>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-span tab-bababa</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-bababa' disabled><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-span tab-bababa</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-bababa' disabled>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-f-11    </p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 11 color #747474</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474' disabled>Tab</button>
                        <p>tab-btn tab-f-11  tab-747474 </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474' disabled>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-f-11  tab-747474</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474 ' disabled><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-f-11  tab-747474 </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474' disabled>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-f-11  tab-747474</p>
                     </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-sm-12'>
                            <center><h4>Tab Font 11 Tab Border color #747474</h4></center>
                        </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474 tab-border' disabled>Tab</button>
                        <p>tab-btn tab-f-11  tab-747474 tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474 tab-border' disabled>Tab <span className='tab-span tab-left-sp'>12</span></button>
                        <p>tab-btn tab-f-11  tab-747474 tab-border</p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474 tab-border ' disabled><span className='tab-span tab-left-sp'>12</span> Tab</button>
                        <p>tab-btn tab-f-11  tab-747474 tab-border </p>
                     </div>
                     <div className='col-lg-3 col-md-4 col-12 text-center'>
                        <button className='tab-btn tab-f-11  tab-747474 tab-border' disabled>Tab <i className="fa-solid fa-circle tab-left-sp"></i></button>
                        <p>tab-btn tab-f-11  tab-747474 tab-border </p>
                     </div>
                    </div>

                </div>  


                <div className='card-box'>
                    <center> <h2>Input Fields</h2></center>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12'>
                            <div className='form-input'>  
                                    <div className='form-in position-relative'> 
                                        <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='big-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon"></i> 
                                    </div>
                                      
                                    <div className='form-in position-relative input-0055BA'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='big-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-2C2C2C'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='big-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-D9D9D9'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='big-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-CC3F40'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='big-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon"></i> 
                                        <p className='helper font-CC3F40'>Helper Text</p>
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-3D9F79'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='big-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon"></i> 
                                        <p className='helper font-3D9F79'>Helper Text</p>
                                    </div> 
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12'>
                            <div className='form-input'>  
                                    <div className='form-in position-relative'> 
                                        <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='medium-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon medium"></i> 
                                    </div>
                                      
                                    <div className='form-in position-relative input-0055BA'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='medium-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon medium"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-2C2C2C'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='medium-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon medium"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-D9D9D9'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='medium-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon medium"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-CC3F40'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='medium-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon medium"></i> 
                                        <p className='helper font-CC3F40'>Helper Text</p>
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-3D9F79'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='medium-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon medium"></i> 
                                        <p className='helper font-3D9F79'>Helper Text</p>
                                    </div> 
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12'>
                            <div className='form-input'>  
                                    <div className='form-in position-relative'> 
                                        <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='small-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon small"></i> 
                                    </div>
                                      
                                    <div className='form-in position-relative input-0055BA'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='small-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon small"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-2C2C2C'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='small-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon small"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-D9D9D9'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='small-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon small"></i> 
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-CC3F40'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='small-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon small"></i> 
                                        <p className='helper font-CC3F40'>Helper Text</p>
                                    </div>

                                    <br/>  
                                    <div className='form-in position-relative input-3D9F79'>
                                         <label>Label</label>
                                        <input type="text" placeholder='Placeholder' className='small-input right-sp'/> 
                                        <i className="fa-regular fa-eye eye-icon small"></i> 
                                        <p className='helper font-3D9F79'>Helper Text</p>
                                    </div> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-box'>
                <h4 className='center-text'>Dropdown</h4>
                   <div className='row'>
                    <div className='col-lg-4 col-md-12'>
                        <ul className='drop-list'>
                            <li><a href="#">Placeholder</a></li>
                            <li><a href="#"  className='bg-F9F9F9'>Placeholder</a></li>
                            <li><a href="#">Placeholder</a></li>
                            <li><a href="#"  className='bg-F9F9F9'>Placeholder</a></li>
                            <li><a href="#">Placeholder</a></li>
                            <li><a href="#"  className='bg-F9F9F9'>Placeholder</a></li>
                            <li><a href="#">Placeholder</a></li>
                            <li><a href="#"  className='bg-F9F9F9'>Placeholder</a></li>
                            <li><a href="#">Placeholder</a></li>
                            <li><a href="#"  className='bg-F9F9F9'>Placeholder</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <ul className='drop-list'>
                            <li>
                                <a href="#"  className='right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 right-sp'>Placeholder 
                                    <div className="box-tag tag-menu">12</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <ul className='drop-list'>
                            <li>
                                <a href="#"  className='left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                            <li>
                                <a href="#"  className='bg-F9F9F9 left-sp '><div className="box-tag tag-menu">12</div> Placeholder</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-12 mt-5'>
                        <div className="form-master-field sp-l-r dflex ">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex bg-F9F9F9">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex ">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex bg-F9F9F9">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex ">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex bg-F9F9F9">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex ">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex bg-F9F9F9">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex ">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                        <div className="form-master-field sp-l-r dflex bg-F9F9F9">
                            <input type="checkbox" placeholder="Placeholder" className="master-fields checkbox border-0" />
                            <label className="check-label">Placeholder</label>
                        </div>
                    </div>
                    <div className='col-sm-4 mt-5'>
                        <h4>Avatars Images</h4>
                        <div className='avatars-img'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-16'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-24'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-32'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-40'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-56'/> 
                        </div>

                        <div className='avatars-img mt-4'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-16'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-24'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-32'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-40'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-56'/> 
                        </div>

                        <div className='avatars-img mt-4'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-16'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-24'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-32'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-40'/> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-3.png'} alt="Avatars-3" className='w-56'/> 
                        </div>
                    </div>
                    <div className='col-sm-4 mt-5'>
                        <div className='row '>
                            <div className='col-sm-12'>
                                <center><h4>Breadcrumbs All</h4></center>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                                <button className='btn-list btn-051B44'>Tab</button>
                                <p>btn-list btn-051B44</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                            <button className='btn-list btn-051B44'>Tab <span className='btn-span tab-left-sp'>12</span></button>
                                <p>btn-list btn-051B44</p>
                            </div> 

                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                                <button className='btn-list btn-C1C4D6'>Tab</button>
                                <p>btn-list btn-C1C4D6</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                            <button className='btn-list btn-C1C4D6'>Tab <span className='btn-span tab-left-sp'>12</span></button>
                                <p>btn-list btn-C1C4D6</p>
                            </div> 

                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                                <button className='btn-list btn-051B44  bg-EDEFF5'>Tab</button>
                                <p>btn-list btn-051B44</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                            <button className='btn-list btn-051B44 bg-EDEFF5'>Tab <span className='btn-span tab-left-sp'>12</span></button>
                                <p>btn-list btn-051B44</p>
                            </div> 

                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                                <button className='btn-list btn-0066FF'>Tab</button>
                                <p>btn-list btn-0066FF</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                            <button className='btn-list btn-0066FF'>Tab <span className='btn-span tab-left-sp'>12</span></button>
                                <p>btn-list btn-0066FF</p>
                            </div> 

                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                                <button className='btn-list btn-0066FF bg-E9F1FF'>Tab</button>
                                <p>btn-list btn-0066FF bg-E9F1FF</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 text-center'>
                            <button className='btn-list btn-0066FF bg-E9F1FF'>Tab <span className='btn-span tab-left-sp'>12</span></button>
                                <p>btn-list btn-0066FF bg-E9F1FF</p>
                            </div> 
                        </div>
                    </div>
                   </div>
                </div>

                <div className='card-box mt-5'>
                    <div className='row'>
                        <div className='col-sm-12'>
                        <h4>Switch</h4>
                            <label className="switch switch-sp">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                            </label>

                            <label className="switch">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                            </label>
                        </div> 
                    </div> 
                </div>

                <div className='card-box mt-5'> 
                  <h4>Molecules</h4>
                </div>
        </div> 

        <section className='banner-part mt-5'> 
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item banner-1 active">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm-7'>
                                <div className='banner-text'>
                                    <h1>Sectors with the <span>highest offers</span></h1>
                                    <p>Create a an account today & start applying!</p>
                                    <p className='banner-btn'><a href="#">Apply Now</a></p>
                                </div>
                                </div>
                                <div className='col-sm-5'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/banner-img-1.png'} alt="banner-img-1" className='banner-img' /> 
                                </div>
                            </div>
                        </div>
                        <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/dots-banner.png'} alt="dots-banner" className='dots-banner' />
                    </div>
                    <div className="carousel-item banner-2">
                    <div className='container'>
                            <div className='row'>
                                <div className='col-sm-7'>
                                <div className='banner-text'>
                                    <h1>Sectors with the <span>highest offers</span></h1>
                                    <p>Create a an account today & start applying!</p>
                                    <p className='banner-btn'><a href="#">Apply Now</a></p>
                                </div>
                                </div>
                                <div className='col-sm-5'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/banner-img-2.png'} alt="banner-img-2" className='banner-img' /> 
                                </div>
                            </div>
                        </div>
                        <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/dots-banner.png'} alt="dots-banner" className='dots-banner' />
                    </div>
                    <div className="carousel-item banner-3">
                    <div className='container'>
                            <div className='row'>
                                <div className='col-sm-7'>
                                <div className='banner-text'>
                                    <h1>Sectors with the <span>highest offers</span></h1>
                                    <p>Create a an account today & start applying!</p>
                                    <p className='banner-btn'><a href="#">Apply Now</a></p>
                                </div>
                                </div>
                                <div className='col-sm-5'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/banner-img-3.png'} alt="banner-img-3" className='banner-img' /> 
                                </div>
                            </div>
                        </div>
                        <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/dots-banner.png'} alt="dots-banner" className='dots-banner' />
                    </div>
                    <div className="carousel-item banner-4">
                    <div className='container'>
                            <div className='row'>
                                <div className='col-sm-7'>
                                <div className='banner-text'>
                                    <h1>Sectors with the <span>highest offers</span></h1>
                                    <p>Create a an account today & start applying!</p>
                                    <p className='banner-btn'><a href="#">Apply Now</a></p>
                                </div>
                                </div>
                                <div className='col-sm-5'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/banner-img-4.png'} alt="banner-img-4" className='banner-img' /> 
                                </div>
                            </div>
                        </div>
                        <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/dots-banner.png'} alt="dots-banner" className='dots-banner' /> 
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </section>        


        <section className='pricing-part mt-5'>
            <div className='container'>
                <h2>Hire Smarter With Our <br/><span> Flexible Pricing Plans</span></h2>
                <h3 className='choose-plan'>Choose a plan that’s right for you</h3>
                <div className='pay-d-flex mb-4'>
                    <p>PAY MONTHLY</p>
                      <label className="switch switch-sp">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                      <p>PAY YEARLY  <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/save-25.png'} alt="save-25" className='save-25'/> </p>
                </div>
                <div className='row mt-5'>
                <div className='col-lg-4 col-md-6'>
                        <div className='plan-box'>
                            <h4>Free</h4>
                            <p>Ideal for small businesses or startups with limited hiring needs and a tight budget.</p>
                            <h3><small>AED</small> 0 <sup>/ Month</sup></h3>
                            <button className='started-part mt-3 mb-3'>Get Started Now</button>
                            <ul className='check-close'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li className='dis'><i className="fa-solid fa-xmark"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li className='dis'><i className="fa-solid fa-xmark"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li className='dis'><i className="fa-solid fa-xmark"></i> Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='plan-box blue-plan'>
                            <h4>Professional</h4>
                            <p>Ideal for businesses with specific hiring needs and advanced search features.</p>
                            <h3><small>AED</small> 25 <sup>/ Month</sup></h3>
                            <button className='started-part mt-3 mb-3'>Get Started Now</button>
                            <ul className='check-close'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li><i className="fa-solid fa-check"></i>  Lorem ipsum dolor sit amet consectetur.</li>
                                <li className='dis'><i className="fa-solid fa-xmark"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li className='dis'><i className="fa-solid fa-xmark"></i> Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='plan-box'>
                            <h4>Enterprise</h4>
                            <p>Ideal for large organizations with extensive hiring needs and dedicated support.</p>
                            <h3><small>AED</small>100 <sup>/ Month</sup></h3>
                            <button className='started-part mt-3 mb-3'>Get Started Now</button>
                            <ul className='check-close'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li><i className="fa-solid fa-check"></i>  Lorem ipsum dolor sit amet consectetur.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='tab-part mt-5'>
            <div className='container'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Career Advice</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Resume Tips</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab2" data-bs-toggle="pill" data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Expert Speak</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-contact3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">News/ Updates</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className='row'>
                        <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-1.png'} alt="tab-1" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Expert Speak</a></p>
                                <h4>All you need to know about quality checking jobs</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-2.png'} alt="tab-2" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Career Advice</a></p>
                                <h4>5 questions to ask an employer before accepting a job offer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-3.png'} alt="tab-3" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Resume Tips</a></p>
                                <h4>Describing an ambition that you haven’t achieved</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-2.png'} alt="tab-2" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Career Advice</a></p>
                                <h4>5 questions to ask an employer before accepting a job offer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-3.png'} alt="tab-3" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Resume Tips</a></p>
                                <h4>Describing an ambition that you haven’t achieved</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-1.png'} alt="tab-1" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Expert Speak</a></p>
                                <h4>All you need to know about quality checking jobs</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact-tab3">
                    <div className='row'>
                        <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-1.png'} alt="tab-1" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Expert Speak</a></p>
                                <h4>All you need to know about quality checking jobs</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-2.png'} alt="tab-2" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Career Advice</a></p>
                                <h4>5 questions to ask an employer before accepting a job offer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='tab-card-box'>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/tab-3.png'} alt="tab-3" className='tab-1'/> 
                                <p className='tab-btn-speak'><a href="#">Resume Tips</a></p>
                                <h4>Describing an ambition that you haven’t achieved</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-3 col-3 pr-0">
                                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2" className='w-48'/> 
                                    </div>
                                    <div className="col-sm-9 col-9 pl-0">
                                        <h6 className="tab-name-user">John Doe</h6>
                                        <p className="tab-interview">23 Jan 2023 - 5 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='build-part mt-5'>
         <div className='container'>
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

            <div className='build-download mt-5'>
                <h2>Build & download your professional resume in seconds — for FREE! </h2>
                <h5>Boost your chances of landing your dream job with our professional resume maker</h5>
                <p className='start-now mt-4'><a href="#">Start Now <i className="fa-solid fa-angles-right"></i></a></p> .
                <i className="fa-solid fa-angle-down up-down-icon"></i>
            </div>

         </div>
        </section>

        <section className='container mt-5'>
            <div className='work-experience-fieild'>
              <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='left-text-fieild'>
                      <h3>Your Work <br/> Experience</h3>
                      <p className='c-747474'>Share your employment <br/> history</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                <div className='right-text-edit'>
                        <div className='row mobile-column-reverse'>
                            <div className='col-sm-9'>
                               <h6>Software Engineer</h6>
                                <p><strong>Meta</strong></p>
                                <p className='date-time'>12/2020 - 02/2023</p>
                                <p className='data-text'>
                                Lorem ipsum dolor sit amet consectetur. Quis elementum mattis odio orci eu pellentesque odio velit. Egestas neque ipsum aliquet auctor dis pulvinar habitant. Id consectetur suspendisse scelerisque mattis mattis blandit nisl dolor sit. Faucibus enim ornare amet sit arcu consequat.
                                </p>
                            </div>
                            <div className='col-sm-3 text-right'>
                            <div className='edit-pi'>
                                <i className="fa-solid fa-square-pen"></i>
                             </div>
                            </div>
                        </div> 
                    </div>

                    <div className='right-text-edit mt-3'>
                        <div className='row mobile-column-reverse'>
                            <div className='col-sm-9'>
                               <h6>Junior Software Engineer</h6>
                                <p><strong>Twitter</strong></p>
                                <p className='date-time'>06/2020 - 12/2020</p> 
                            </div>
                            <div className='col-sm-3 text-right'>
                             <div className='edit-pi'>
                                <i className="fa-solid fa-square-pen"></i>
                             </div>
                            </div>
                        </div> 
                    </div>

                  <p className='add'><i className="fa-solid fa-plus"></i> Add Experience</p>

                  <form className='form-experience-fieild'>
                    <label>Title*</label>
                    <input type='text' placeholder='Software Engineer' className='fild-des'/>

                    <label>Company*</label>
                    <input type='text' placeholder='Meta' className='fild-des'/>

                    <div className='row'>
                     <div className='col-sm-6'>
                      <label>Start Date*</label>
                      <input type='date' className='fild-des'/>
                     </div>
                     <div className='col-sm-6'>
                      <label>End Date*</label>
                      <input type='date' className='fild-des'/>
                      <label className='d-flex-form'><input type='checkbox' /> I currently work here</label>
                     </div>
                    </div>

                    <label>Description*</label>
                    <textarea placeholder='Your description goes here...' className='fild-des'></textarea>               
                    <p className='font-12 text-right words'>250 words</p>

                    <div className='text-right mt-3'>
                      <button className='cancel'>Cancel</button>
                      <button className='save'>Save</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
        </section>

        <section className='container mt-5'>
            <div className='work-experience-fieild'>
              <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='left-text-fieild'>
                      <h3>Your Skills</h3>
                      <p className='c-747474'>Flaunt your skills to<br/> employers</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                    <form className='form-experience-fieild'> 
                      <label>Add Skills</label>
                        <div className='search-in w-100'>
                            <input className="form-control me-2" type="search" placeholder="e.g. React, Node.js, Sass" aria-label="Search" /> 
                            <i className="fa-solid fa-magnifying-glass glass-ser"></i>
                        </div>  
                    </form>
                 </div> 
            </div>
           </div>
        </section>

        <section className='container mt-5'>
            <div className='work-experience-fieild'>
              <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='left-text-fieild'>
                      <h3>Portfolio/Projects</h3>
                      <p className='c-747474'>Showcase your work</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                <div className='right-text-edit'>
                        <div className='row mobile-column-reverse'>
                            <div className='col-sm-9'>
                               <h6>A very interesting project</h6>
                                <p><strong>https://linktoproject.com</strong></p>
                                <p className='date-time'>12/2020 - 02/2023</p>
                                <p className='data-text'>
                                Lorem ipsum dolor sit amet consectetur. Quis elementum mattis odio orci eu pellentesque odio velit. Egestas neque ipsum aliquet auctor dis pulvinar habitant. Id consectetur suspendisse scelerisque mattis mattis blandit nisl dolor sit. Faucibus enim ornare amet sit arcu consequat.
                                </p>
                            </div>
                            <div className='col-sm-3 text-right'>
                            <div className='edit-pi'>
                                <i className="fa-solid fa-square-pen"></i>
                             </div>
                            </div>
                        </div> 
                    </div> 

                  <p className='add'><i className="fa-solid fa-plus"></i> Add Experience</p>

                  <form className='form-experience-fieild'>
                    <label>Title*</label>
                    <input type='text' placeholder='Software Engineer' className='fild-des'/>

                    <label>Link</label>
                    <input type='text' placeholder='Add your project or portfolio link here' className='fild-des'/>

                    <div className='row'>
                     <div className='col-sm-6'>
                      <label>Start Date*</label>
                      <input type='date' className='fild-des'/>
                     </div>
                     <div className='col-sm-6'>
                      <label>End Date*</label>
                      <input type='date' className='fild-des'/>
                      <label className='d-flex-form'><input type='checkbox' /> Present</label>
                     </div>
                    </div>

                    <label>Description*</label>
                    <textarea placeholder='Your description goes here...' className='fild-des'></textarea>               
                    <p className='font-12 text-right words'>250 words</p>

                    <div className='text-right mt-3'>
                      <button className='cancel'>Cancel</button>
                      <button className='save'>Save</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
        </section>


        <section className='container mt-5'>
            <div className='work-experience-fieild'>
              <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='left-text-fieild'>
                      <h3>Languages</h3>
                      <p className='c-747474'>Enter the languages you know</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                <div className='right-text-edit'>
                        <div className='row mobile-column-reverse'>
                            <div className='col-sm-9'>
                               <h6>English</h6>
                                <p><strong>Native/Bilingual</strong></p> 
                            </div>
                            <div className='col-sm-3 text-right'>
                            <div className='edit-pi'>
                                <i className="fa-solid fa-square-pen"></i>
                             </div>
                            </div>
                        </div> 
                    </div> 

                  <p className='add'><i className="fa-solid fa-plus"></i> Add Experience</p>

                  <form className='form-experience-fieild'> 
                    <label>Language</label>
                    <div className='search-in w-100 mb-3'>
                        <input className="form-control me-2" type="search" placeholder="e.g. React, Node.js, Sass" aria-label="Search" /> 
                        <i className="fa-solid fa-magnifying-glass glass-ser"></i>
                    </div>  
                    <label>Proficiency</label>
                    <select className="fild-des">
                        <option>Limited Working Proficiency</option>
                        <option>Limited Working Proficiency 2</option>
                        <option>Limited Working Proficiency 3</option>
                    </select>
                 </form>
                </div>
              </div>
            </div>
        </section>

        <section className='container mt-5'>
            <div className='work-experience-fieild'>
              <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='left-text-fieild'>
                      <h3>Team Members</h3>
                      <p className='c-747474'>Add your team members to your company profile</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'>  
                    <div className='right-text-edit'>
                        <div className='row mobile-column-reverse'>
                            <div className='col-sm-9'>
                                <h6>Member Name</h6>
                                <p><strong>team-mate@gmail.com</strong></p> 
                            </div>
                            <div className='col-sm-3 text-right'>
                            <div className='edit-pi'>
                                <i className="fa-solid fa-square-pen"></i>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className='right-text-edit mt-3'>
                        <div className='row mobile-column-reverse'>
                            <div className='col-sm-9'>
                                <h6>Member Name</h6>
                                <p><strong>team-mate@gmail.com</strong></p> 
                            </div>
                            <div className='col-sm-3 text-right'>
                            <div className='edit-pi'>
                                <i className="fa-solid fa-square-pen"></i>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className='right-text-edit mt-3'>
                        <div className='row mobile-column-reverse'>
                            <div className='col-sm-9'>
                                <h6>Member Name</h6>
                                <p><strong>team-mate@gmail.com</strong></p> 
                            </div>
                            <div className='col-sm-3 text-right'>
                            <div className='edit-pi'>
                                <i className="fa-solid fa-square-pen"></i>
                                </div>
                            </div>
                        </div> 
                    </div>

                    

                  <form className='form-experience-fieild'>
                    <label>Add Team Member</label>
                    <input type='text' placeholder='team-mate@gmail.com' className='fild-des'/>
 
                    <div className='text-right mt-3'>
                      <button className='cancel'>Cancel</button>
                      <button className='save'>Save</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>
        </section>
 

     </div>
 
        </>
  )
}