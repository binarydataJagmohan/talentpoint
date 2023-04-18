import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function Signup() {
    return (
        <>
           <section className='banner-part-home'>
             <div className='container-fluid'> 
                <div className='row'>
                  <div className='col-lg-5 col-md-12 tab-none pl-0'>
                  <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/form-img.png'} alt="form-img" className='w-100'   />
                  </div>
                  <div className='col-lg-7 col-md-12'>
                    <div className='form-pages top-m-sp'>
                      <h2>Let's get started!</h2>
                      <h5>Create an account to get started.</h5>
                      <form className='form-get mt-4'> 
                          <label>Full Name*</label>
                          <input type="text" placeholder='Alan Moore' className='big-input mb-4'/>  

                          <label>Email ID*</label>
                          <input type="text" placeholder='alanmoore@gmail.com' className='big-input mb-4'/>  
                          <center><p className='f-12-747474'>By joining I agree to receive emails from The Talent Point.</p></center>
                          <button className="btn-a primary-size-16 b-0 btn-bg-0055BA w-100">Continue</button>
                          <div className='or'>
                            <p>or</p>
                          </div>
                          <button className='google-g w-100 mb-4'><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/google-logo.png'} alt="google-logo"/> Continue with Google</button>

                          <button className='google-g w-100 mb-4 bg-0072B1'><i className="fa-brands fa-linkedin"></i><span> Continue with LinkedIn</span></button>

                          <center><p className='f-12-747474'>Already a part of The Talent Point Community? <a href="#"> Sign In</a></p></center>
                      </form>
                    </div>
                  </div>
                </div>
             </div>
           </section>
 


        </>
  )
}
