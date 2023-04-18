import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function CreateNumber() {
    return (
        <>
           <section className='banner-part-home'>
             <div className='container-fluid'> 
                <div className='row'>
                  <div className='col-lg-5 col-md-12 tab-none pl-0'>
                  <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/form-img.png'} alt="form-img" className='w-100'   />
                  </div>
                  <div className='col-lg-7 col-md-12'>
                    <div className='form-pages top-m-sp  '>
                      <h3>Create your Account</h3> 
                      <form className='form-get mt-4'>   
                      
                          <label>Your Contact Number *</label>
                          <input type="text" placeholder='123 – 456 – 7890' className='big-input mb-4'/> 
  
                           <label className='check-label'>  <input type="checkbox" className="w-16"/> By clicking checkbox, you agree to our <a href="#">Terms and Conditions</a> and  <a href="#">Privacy Policy</a></label>
                           
                          <button className="btn-a primary-size-16 b-0 btn-bg-0055BA w-100 mt-3">Submit</button>
                           
                      </form>
                    </div>
                  </div>
                </div>
             </div>
           </section>
 


        </>
  )
}
