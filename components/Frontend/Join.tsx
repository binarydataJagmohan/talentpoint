import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function Join() {
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
                      <h3>Join our expanding community today!</h3> 
                      <form className='form-get mt-4'> 
                      <div className='text-center'>
                           <h6 className='f-22  mt-5'>Are you:</h6>
                           <button className="signup-cards white-btn  mt-3"><i className="fa-solid fa-magnifying-glass"></i> Looking for A Job </button>

                           <button className="signup-cards white-btn mt-4"><i className="fa-solid fa-bag-shopping"></i> Hiring New Talent</button>
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
