import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function Login() {
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
                      <h2>Welcome Back!</h2>
                      <h5>Let’s get you connected.</h5>
                      <form className='form-get mt-4'>  

                          <label>Email ID*</label>
                          <input type="text" placeholder='alanmoore@gmail.com' className='big-input mb-4'/>

                          <div className="form-in position-relative c-999999">
                            <label>Password*</label>
                            <input type="password" placeholder="password" className="big-input right-sp"/>
                              <i className="fa-regular fa-eye-slash eye-icon"></i>
                          </div>
                          <p className='f-12 text-right forgot'><a href="#">Forgot Password?</a></p>
 

                          <label className="check-label c-747474"> 
                             <input type="checkbox" className="w-16" /> Remember Me
                          </label>

                          <button className="btn-a primary-size-16 b-0 btn-bg-0055BA w-100">Log In</button>
                          <div className='or'>
                            <p>or</p>
                          </div>
                          <button className='google-g w-100 mb-4'><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/google-logo.png'} alt="google-logo"/> Continue with Google</button>

                          <button className='google-g w-100 mb-4 bg-0072B1'><i className="fa-brands fa-linkedin"></i><span> Continue with LinkedIn</span></button>

                          <center><p className='f-12-747474'>New to The Talent Point?  <a href="#">Create An Account</a></p></center>
                      </form>
                    </div>
                  </div>
                </div>
             </div>
           </section>
 


        </>
  )
}
