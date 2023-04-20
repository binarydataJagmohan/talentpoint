import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function SetCompanyProfile() {
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

                        <div className='left-list-form  '>
                          <h4>Publish A Job</h4>
                          <p>Lorem ipsum dolor sit amet consectetur. Proin amet proin.</p>
                        </div>
                        
                      </div>
                      <div className='tab-none gap-box'></div>
                  </div>
                  <div className='col-lg-7 col-md-12'>
                    <div className='form-pages  form-left-right-add-sp pt-5 pb-5'>
                      <h4>Set company profile</h4> 
                      <form className='form-get mt-4'> 
                          
                          <label>Website*</label>
                          <input type="text" placeholder='https://www.website.com' className='big-input mb-4'/> 

                          <label>Location*</label>
                            <select className="big-select">
                              <option>United Arab Emirates</option>
                              <option>United Arab Emirates 2</option>
                              <option>United Arab Emirates 3</option>
                            </select> 

                            <label>Sector*</label>
                            <select className="big-select">
                              <option>Software</option>
                              <option>Software 2</option>
                              <option>Software 3</option>
                            </select> 

                            <label>Number of Employees*</label>
                            <select className="big-select">
                              <option>51-100</option>
                              <option>51-100 2</option>
                              <option>51-100 3</option>
                            </select>  
                           
                           <div className='row'>
                            <div className='col-3'>
                              <button className="btn login  w-100 mt-4">Back</button>
                            </div>
                            <div className='col-9'>
                               <button className="btn-a primary-size-16 b-0 btn-bg-0055BA w-100 mt-4">Continue</button>
                            </div>
                           </div>
                          
                      </form>
                    </div>
                  </div>
                </div>
             </div>
           </section>
 


        </>
  )
}
