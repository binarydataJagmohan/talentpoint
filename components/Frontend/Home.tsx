import React, {useState, useEffect} from 'react'; 
import { useRouter } from "next/router";

export default function Home() {
    return (
        <>
           <section className='banner-part-home'>
             <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <h1 className='mt-5 tab-m-0'>Don’t wait for opportunities. <br/> We <span className='span-color'>create</span> them.</h1>
                        <p className='font-banner-26 mb-4'>The home of your dream job in Dubai.</p>
                        <button className='btn-a primary-size-22 btn-bg-0055BA mr-1 tab-w-100'>Create Profile</button>
                        <button className='btn-a border-primary-size-22 border-0055BA tab-w-100 tab-m-t-b'>Explore Jobs</button>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/home/Frame 17.png'} alt="Frame 17"  /> 
                    </div>
                </div>
                
             </div>
           </section>

           <section className='banner-part-home'>
             <div className='container'>
               <div className='form-card'>
                 <div className='row'>
                    <div className='col-sm-5'>
                     <div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Job Title, Keyword, Company or Phrase" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                     </div>
                    </div>
                    <div className='col-sm-5'>
                     <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Job Title, Keyword, Company or Phrase" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                    <div className='col-sm-2'></div>
                 </div>
               </div>
             </div>
           </section>
        </>
  )
}
