import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function AddCompany() {
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

                        <div className='left-list-form  '>
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
                      <h4>Add your company</h4> 
                      <form className='form-get mt-4'> 
                          
                          <label>Company Name</label>
                          <input type="text" placeholder='Microsoft' className='big-input mb-4'/> 

                           <label>Your Designation</label>
                          <input type="text" placeholder='HR Manager' className='big-input mb-4'/>  
                          
                          <div className='row'>
                            <div className='col-sm-3 col-5'>
                              <div className='dash-profile-img mb-4'>
                                <p  className='f-12 c-2C2C2C'>Logo</p>
                                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-4.png'} alt="Avatars-4"  /> 
                               
                              </div>
                            </div>
                            <div className='col-sm-9 col-7'>
                              <button className='b-des-btn mt-5 '><i className="fa-solid fa-download"></i> Upload Logo</button>
                            </div>
                          </div>

                          <button className="btn-a primary-size-16 b-0 btn-bg-0055BA w-100 mt-4">Continue</button>
                           
                      </form>
                    </div>
                  </div>
                </div>
             </div>
           </section>
 


        </>
  )
}
