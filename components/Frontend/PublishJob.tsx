import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function PublishJob() {
    return (
        <>
           <section className='banner-part-home'>
             <div className='container-fluid'> 
                <div className='row'>
                  <div className='col-lg-5 col-md-12 bg-form-img'>
                      <div className='form-left-text  pt-5 pb-5'>
                        <h3>Start building your dream team with us...</h3>
                        <div className='left-list-form active'>
                          <h4>Add Your Company</h4>
                          <p>Lorem ipsum dolor sit amet consectetur. Proin amet proin.</p>
                        </div>

                        <div className='left-list-form  active'>
                          <h4>Set Company Profile</h4>
                          <p>Lorem ipsum dolor sit amet consectetur. Proin amet proin.</p>
                        </div>

                        <div className='left-list-form  active'>
                          <h4>Publish A Job</h4>
                          <p>Lorem ipsum dolor sit amet consectetur. Proin amet proin.</p>
                        </div>
                        
                      </div>
                      <div className='tab-none gap-box'></div>
                  </div>
                  <div className='col-lg-7 col-md-12'>
                    <div className='form-pages   form-left-right-add-sp pt-5 pb-5'>
                      <h4>Publish a Job</h4> 
                      <p className='f-16-form'>Enter basic job details and get started right away.</p>
                      <form className='form-get w-574  mt-4'> 
                      <label>Job Title*</label>
                      <input type="text" placeholder='Title' className='big-input mb-4'/> 

                      <label>Job Description Editor</label>
                      <input type="text"   className='big-input mb-4'/> 

                      <label>Type of Position*</label> 
                      <select className="big-select">
                        <option>Full-time</option>
                        <option>Full-time 2</option>
                        <option>Full-time 3</option>
                      </select> 

                      <label>Job Country*</label> 
                      <select className="big-select">
                        <option>United Arab Emirates</option>
                        <option>United Arab Emirates 2</option>
                        <option>United Arab Emirates 3</option>
                      </select> 

                      <label>Industry*</label> 
                      <select className="big-select">
                        <option>Enterprise Software</option>
                        <option>Enterprise Software 2</option>
                        <option>Enterprise Software 3</option>
                      </select> 

                      <label>Experience*</label> 
                      <select className="big-select">
                        <option>1-2 years</option>
                        <option>1-2 years 2</option>
                        <option>1-2 years 3</option>
                      </select> 

                      <label>Skills Required*</label> 
                      <select className="big-select">
                        <option>Type skill here</option>
                        <option>Type skill here 2</option>
                        <option>Type skill here 3</option>
                      </select>

                      <div className='row'>
                         <div className='col-12'><label>Monthly Fixed Salary</label> </div>
                        <div className='col-sm-3 col-4'> 
                        <select className="big-select">
                          <option>AED</option>
                          <option>AED 2</option>
                          <option>AED 3</option>
                        </select>
                        </div>
                        <div className='col-sm-4 col-4'> 
                         <input type="text" placeholder='Min' className='big-input '/> 
                        </div>
                        <div className='col-sm-5 col-4'>
                         <input type="text" placeholder='Max' className='big-input '/> 
                        </div>
                      </div>

                      <label>Available Vacancies*</label>
                      <input type="text" placeholder='1' className='big-input mb-4'/> 

                      <label className='check-label'>  <input type="checkbox" className="w-16"/> Hide Employer Details</label>

                      <div className='row'>
                      <div className='col-3'>
                        <button className="btn login  w-100 mt-4">Back</button>
                      </div>
                      <div className='col-9'>
                          <button className="btn-a primary-size-16 b-0 btn-bg-0055BA w-100 mt-4">Continue</button>
                      </div>
                      </div>

                           <p className='text-center skip mt-4'><a href="#">Skip</a></p>
                          
                      </form>
                    </div>
                  </div>
                </div>
             </div>
           </section>
 


        </>
  )
}
