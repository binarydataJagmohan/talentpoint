import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function FirstLoadingPopup() {
    return (
        <>
           <section className='banner-part-home mt-5'>
             <div className='container'> 
              <center>
               <button className="btn-a primary-size-22 btn-bg-0055BA" data-bs-toggle="modal" data-bs-target="#exampleModal">First Loading Popup</button>
               </center> 
                <div className="modal fade pop-des" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content br-16 "> 
                      <div className="modal-body p-0 "> 
                       <div className='row'>
                         <div className='col-sm-8'>
                            <div className='popup-text-areya'>
                             <div className='popup-left-text '>
                                <h3>Finding <span className='span-color'>Talent</span> has never been easier.</h3>
                                <p>Our platform is designed to make your onboarding process as smooth as possible. Get started right away by following the our curated sign up process.</p>
                                <div className='left-list-form popup-0EB1D2'>
                                  <h4>Add Your Company</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur. Proin amet proin.</p>
                                </div>

                                <div className='left-list-form  popup-0EB1D2'>
                                  <h4>Set Company Profile</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur. Proin amet proin.</p>
                                </div>

                                <div className='left-list-form  popup-0EB1D2 line-none'>
                                  <h4>Publish A Job</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur. Proin amet proin.</p>
                                </div>

                                <button className="btn-a primary-size-18 btn-bg-0055BA ">Get Started</button>
                                
                              </div>
                            </div>
                         </div>
                         <div className='col-sm-4 popup-right'>
                           <div className='text-right'>
                             <button type="button" className="close-x mt-2" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                           </div>
                         </div>
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
