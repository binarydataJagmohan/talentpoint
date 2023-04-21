import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function AddTeamMembers() {
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
                      <h4>Add team members</h4> 
                      <p className='f-16-form'>Enter the email of your team members and we will send them an invite.</p>
                      <form className='form-get mt-4'> 
                           
                      <input type="text" placeholder='team-mate@gmail.com' className='big-input mb-4'/> 
                      <input type="text" placeholder='team-mate@gmail.com' className='big-input mb-4'/> 
                      <input type="text" placeholder='team-mate@gmail.com' className='big-input mb-4'/>  
                      <p className='f-16-form add-member'><a href="#"><i className="fa-solid fa-plus"></i> Add Team Member</a></p> 

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
