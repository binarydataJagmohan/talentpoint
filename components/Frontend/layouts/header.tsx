import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";

export default function Header() {
    return (
        <>
               <header className='head-part '>  
     <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo.png'} alt="logo" className='logo-head'/></a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
                 <i className="fa-solid fa-x close-x"></i>
            </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-lg-0">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">JOBS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">CAREER TIPS</a>
                </li> 
                <li className="nav-item">
                <a className="nav-link" href="#">ABOUT</a>
                </li> 
                <li className="nav-item">
                <a className="nav-link" href="#">FOR EMPLOYERS</a>
                </li> 
            </ul>
            <form className="d-flex mobile-single"> 
            <button className="btn login mobile-w-100" type="submit">Log In</button>
            <button className="btn signup mobile-w-100" type="submit">Sign Up</button>
            </form>
            </div>
        </div>
        </nav>  
</header>
        </>
  )
}
