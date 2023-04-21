import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";

export default function Sidebar() {
    return (
        <>
        <div className='left-bar'>
            <div className='text-center mt-4'>
                <div className="dash-profile-img mb-4 m-auto">
                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2"  /> 
                    <a href="#"><i className="fa-solid fa-pen"></i> </a>
                </div> 
                <h4 className='name-text'>Alan Moore</h4>
                <h5 className='roll'>Software Engineer</h5>

                    <div className="accordion text-left" id="accordionExample">
                    <div className="up-down-item w-270 m-auto">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-1.png'} alt="icon-1" className='w-16' /> Ready to Interview
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-1.png'} alt="icon-1" className='w-24' /> Ready to Interview</h5> 
                                <p>Actively looking for openings & ready to interview.</p>
                            </div>
                            <div className="accordion-body f-D57B11">
                                <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-2.png'} alt="icon-2" className='w-24' /> Open to Offers</h5> 
                                <p>Not actively looking but open to hear about new opportunities. </p>
                            </div>
                            <div className="accordion-body f-D04E4F">
                                <h5><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/icon-3.png'} alt="icon-3" className='w-24' /> Not Looking</h5> 
                                <p>Not actively looking for opportunities right now.</p>
                            </div> 
                            </div>
                        </div>
                        
                    
                    </div>
                    </div>

                <ul className='side-menu-left mt-4'>
                    <li className='active'><a href="#"><i className="fa-regular fa-envelope-open"></i> Home</a></li>
                    <li><a href="#"><i className="fa-regular fa-circle-user"></i> Profile</a></li>
                    <li><a href="#"><i className="fa-regular fa-file-lines"></i> Resume</a></li>
                    <li><a href="#"><i className="fa-solid fa-briefcase"></i> Jobs</a></li>
                    <li><a href="#"><i className="fa-regular fa-folder"></i>Applications</a></li>
                    <li><a href="#"><i className="fa-regular fa-message"></i>Messages</a></li>
            
                </ul>
            </div>
         </div>
        </>
  )
}