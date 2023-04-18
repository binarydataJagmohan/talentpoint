import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";

export default function Sidebar() {
    return (
        <>
        <div className='left-bar'>
            <div className='text-center mt-4'>
                <div className="dash-profile-img mb-4 m-auto">
                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-6.png'} alt="Avatars-6"  /> 
                    <a href="#"><i className="fa-solid fa-pen"></i> </a>
                </div> 
                <h4 className='name-text'>Connect Group</h4>
                <h5 className='roll'>Admin</h5>

                <ul className='side-menu-left mt-4'>
                    <li className='active'><a href="#"><i className="fa-regular fa-envelope-open"></i> Home</a></li>
                    <li><a href="#"><i className="fa-solid fa-shop"></i> Employers</a></li>
                    <li><a href="#"><i className="fa-solid fa-briefcase"></i> Jobs</a></li>
                    <li><a href="#"><i className="fa-regular fa-circle-user"></i> Candidates</a></li>
                    <li><a href="#"><i className="fa-regular fa-folder"></i> Data Management</a></li>
                </ul>
            </div>
         </div>
        </>
  )
}