import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function CandidateOnboarding() {
    return (
        <>
           <section className='banner-part-home sp-80'>
             <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <h1 className='mt-5 tab-m-0'>Don’t wait for opportunities. <br/> We <span className='span-color'>create</span> them.</h1>
                        <p className='font-banner-26 mb-4'>The home of your dream job in Dubai.</p>
                        <button className='btn-a primary-size-22 btn-bg-0055BA mr-1 tab-w-100'>Create Profile</button>
                        <button className='btn-a border-primary-size-22 border-0055BA tab-w-100 tab-m-t-b'>Explore Jobs</button>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Frame 17.png'} alt="Frame 17"  /> 
                    </div>
                </div>
                
             </div>
           </section>

           <section className='form-search-home sp-80'>
             <div className='container'>
               <div className='form-card'>
                 <div className='row'>
                    <div className='col-lg-5 col-md-12'>
                     <div>
                      <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control" placeholder="Job Title, Keyword, Company or Phrase" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                     </div>
                    </div>
                    <div className='col-lg-5 col-md-12'>
                     <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-location-dot"></i></span>
                        <input type="text" className="form-control" placeholder="Location" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                    <div className='col-lg-2 col-md-12'>
                    <button className='btn-a primary-size-16 btn-bg-0055BA tab-w-100'>Search</button>
                    </div>
                 </div>
               </div>
             </div>
           </section>

           <section className='talent sp-80'>
             <div className='container'>
              <h2 className='title-heading'>Who’s Hiring <span className='span-color'>Talent?</span></h2>
              <div className='row mt-5 tab-m-0'>
                <div className='col-lg-3 col-md-12 '>
                  <div className='we-to'>
                    <h5>We’re home to</h5>
                    <h2>1000+</h2>
                    <h5>job listings!</h5>
                  </div>
                </div>
                <div className='col-lg-9 col-md-12 '>
                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Logos.png'} alt="Logos"  /> 
                </div>
              </div>
              <div className='text-center mt-5'>
                <button className='btn-a primary-size-18 btn-bg-0055BA'>Apply Now</button>
              </div>
             </div>
           </section>

           <section className='call-us sp-80'>
             <div className='container'>
               <h3>Lorem ipsum dolor sit amet consectetur. Elementum.</h3>
               <h5>Lorem ipsum dolor sit amet consectetur. Accumsan tortor elit eget.</h5>
               <button className='btn-a primary-size-22 btn-bg-fff mt-3'>Contact Us</button>
             </div>
           </section>

           <section className='top-jobs sp-80'>
             <div className='container'>
               <h3 className='title-heading'>Top<span className='span-color'> jobs openings</span></h3>
               <h5>Lorem ipsum dolor sit amet consectetur. Accumsan tortor elit eget.</h5>
               <div className='row mt-5'>
                <div className='col-lg-4 col-md-12 mb-3'>
                  <div className='white-card job-data'>
                    <div className='row'>
                      <div className='col-9'>
                        <h4>Software Engineer</h4>
                        <h5>Microsoft</h5>
                        <ul className='jab-list'>
                          <li><i className="fa-solid fa-business-time"></i> 3-5 years</li>
                          <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                        </ul>
                      </div>
                      <div className='col-3'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Logo.png'} alt="Logo" className='w-72' /> 
                      </div>
                    </div>
                    <button className='btn-a primary-size-16 btn-bg-0055BA w-100'>Apply Now</button>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12 mb-3'>
                  <div className='white-card job-data'>
                    <div className='row'>
                      <div className='col-9'>
                        <h4>Warehouse Assistant</h4>
                        <h5>Ikea</h5>
                        <ul className='jab-list'>
                          <li><i className="fa-solid fa-business-time"></i> 2-3 years</li>
                          <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                        </ul>
                      </div>
                      <div className='col-3'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Logo-2.png'} alt="Logo-2" className='w-72' /> 
                      </div>
                    </div>
                    <button className='btn-a primary-size-16 btn-bg-0055BA w-100'>Apply Now</button>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12 mb-3'>
                  <div className='white-card job-data'>
                    <div className='row'>
                      <div className='col-9'>
                        <h4>Cost Officer</h4>
                        <h5>Emaar</h5>
                        <ul className='jab-list'>
                          <li><i className="fa-solid fa-business-time"></i> 5-8 years</li>
                          <li><i className="fa-solid fa-location-dot"></i> Dubai - UAE</li>
                        </ul>
                      </div>
                      <div className='col-3'>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Logo-3.png'} alt="Logo-3" className='w-72' /> 
                      </div>
                    </div>
                    <button className='btn-a primary-size-16 btn-bg-0055BA w-100'>Apply Now</button>
                  </div>
                </div>
               </div>
               <div className='text-center mt-5'> 
                 <button className='btn-a border-primary-size-18 border-0055BA bg-ebf1f9'>Explore All Jobs</button>
               </div>
             </div>
           </section>

           <section className='banner-part'> 
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

        <section className='find-bylocation'>
        <div className='container'>
          <h3 className='title-heading'>Find jobs by <span className='span-color-2'> location</span></h3>
          <h5>Find your <span className='span-color-2'>dream job,</span> near you.</h5>
          <div className='d-flex-box mt-5 mb-4'>
            <div className='box-flg-w-20'>
              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/2.jpg'} alt="2"  />
                  </div>
                  <div className='col-9'>
                    <p>United Arab Emirates</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>
              
              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/1.jpg'} alt="1"  />
                  </div>
                  <div className='col-9'>
                    <p>Qatar</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>

              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/3.jpg'} alt="3"  />
                  </div>
                  <div className='col-9'>
                    <p>Saudi Arabia</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>

              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/4.jpg'} alt="4"  />
                  </div>
                  <div className='col-9'>
                    <p>Bahrain</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>

              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/5.jpg'} alt="5"  />
                  </div>
                  <div className='col-9'>
                    <p>Kuwait</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div> 

              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/6.jpg'} alt="6"  />
                  </div>
                  <div className='col-9'>
                    <p>Israel</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>
              
              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/7.jpg'} alt="7"  />
                  </div>
                  <div className='col-9'>
                    <p>Egypt</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>

              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/8.jpg'} alt="8"  />
                  </div>
                  <div className='col-9'>
                    <p>Lebanon</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>

              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/9.jpg'} alt="9"  />
                  </div>
                  <div className='col-9'>
                    <p>Jordan</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>

              <div className='flg-part'>
                <div className='row'>
                  <div className='col-3 pr-0'>
                   <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/10.jpg'} alt="10"  />
                  </div>
                  <div className='col-9'>
                    <p>Oman</p>
                    <p className='font-12'>1,500 Jobs <i className="fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center mt-5'> 
            <button className='btn-a border-primary-size-22 border-fff'>Explore Jobs</button>
          </div>

        </div>
        </section>

        <section className='need-help'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 col-md-12'>
                 <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Group 39894.png'} alt="Group 39894" className='tab-none' />
              </div>
              <div className='col-lg-7 col-md-12'>
                <h3>Need help with your resume?</h3>
                <h4>It’s as simple as uploading it. Try Now!</h4>
                <div className='tips mt-5 mb-4'>
                  <h5>Here’s some tips...</h5>
                  <h6>Follow our tips to create an impressive CV.</h6>
                  <button className='btn-a border-primary-size-22 border-fff mt-4 tab-w-100'>Explore Jobs</button>
                </div>

                <div className='make-it'>
                  <h5>Let us make it for you — for free! </h5>
                  <h6>Build a professional, job winning CV in minutes.</h6>
                  <button className='btn-a primary-size-22 btn-bg-fff mt-4 tab-w-100'>Upload CV</button>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className='looking-hire'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4'>
                 <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Group 2864.png'} alt="Group 2864"  />
              </div>
              <div className='col-sm-8 '>
                <h3 className='mt-5 tab-m-0'>Looking to Hire?</h3>
                <h6>Try our recruitment and job portal for free today!</h6>
                <p>Find great talent on the No. 1 Job Portal with customizable solutions from the Talent Point.</p>
                <button className="btn-a primary-size-22 btn-bg-0055BA tab-w-100">Hire Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className='tab-part sp-80'>
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

        <section className='stay-updated  sp-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='updated-stay'>
                  <h2>Stay Updated</h2>
                  <p className='font-26'>Get latest HR News, Trends, Facts and Advices. We will deliver all of it directly to your inbox.</p>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='email-form mt-4 tab-m-0'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <input type="text" placeholder='Enter your email' className='form-white-22-font'/>
                    </div>
                    <div className='col-lg-4'>
                    <button className="btn-a primary-size-22 btn-bg-fff tab-w-100 tab-sp">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        </>
  )
}
