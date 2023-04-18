import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function TellUs() {
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
                      <h3>Tell us a bit about yourself</h3> 
                      <form className='form-get mt-4'> 
                          <label>Where are you currently based?</label>
                          <select className='big-select'>
                            <option>Software Developer</option>
                            <option>Software Developer 2</option>
                            <option>Software Developer 3</option>
                          </select>  

                          <label>Current Position</label>
                          <input type="text" placeholder='Software Developer' className='big-input mb-4'/>  
                           
                          <label>Where are you in job search?*</label>
                          <select className='big-select'>
                            <option>Ready to Interview</option>
                            <option>Ready to Interview 2</option>
                            <option>Ready to Interview 3</option>
                          </select>  

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
