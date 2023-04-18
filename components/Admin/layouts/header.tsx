import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
  
export default function Header() {
    const [belliconshow, setBellIconShow] = useState(false);
    const showBellIconOnclick = (showVal: any) => { 
        setBellIconShow(showVal);
    }

    const [belliconshow2, setBellIconShow2] = useState(false);
    const showBellIconOnclick2 = (showVal: any) => { 
        setBellIconShow2(showVal);
    }
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
            <div className="collapse navbar-collapse j-end " id="navbarSupportedContent"> 
            <form className="d-flex mobile-single "> 
            <div className='search-in'>
                <input className="form-control me-2" type="search" placeholder="Search for jobs, companies or location" aria-label="Search" /> 
                <i className="fa-solid fa-magnifying-glass glass-ser"></i>
            </div>
            <div className='dask-tab-mobile-d-flex'>
                <p className='head-icon notifications'>
                {belliconshow
                    ?
                        <>
                            <a href="#" className='fill-bell' onClick={(e) => showBellIconOnclick(false)}><i className="fa-solid fa-bell fill-bell"></i></a>
                            <div className='box-noti'>
                                <div className='bell-box'>
                                    <div className='row'>
                                        <div className='col-7'>
                                            <h4 className='not-title'>Notifications</h4>
                                        </div>
                                        <div className='col-5'></div>
                                    </div>
                                </div>
                                <i className="fa-solid fa-bell-slash"></i>
                                <h5>No New Notifications</h5>
                                <p>Check this section for job updates, and general notifications.</p>
                            </div>
                        </>
                    :
                        <a href="#" onClick={(e) => showBellIconOnclick(true)}><i className="fa-regular fa-bell"></i></a>
                } 
                 
                </p>
                <p className='user-img'>
                <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1" className='w-40' />
                </p>
                <p className='head-icon  dots-three'>
                <a href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                </p>
            </div>
            </form>
            </div>
        </div>
    </nav>  
</header>
        </>
  )
}
