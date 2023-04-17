import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='bg-white mt-5'>
    <div className='footer-part'>
        <div className='container'>
            <div className='row'>
            <div className='col-sm-4'>
            <a href="#"><img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo.png'} alt="logo" className='logo-ft'/></a>
            </div>
            <div className='col-sm-8'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <h5>For Candidates</h5>
                        <h5>For Employers</h5>
                    </div>
                    <div className='col-sm-3'>
                        <h5>Quick Links</h5> 
                        <ul className='ft-list'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Insights</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Releases</a></li> 
                        </ul>
                    </div>
                    <div className='col-sm-3'>
                        <h5>Company</h5> 
                        <ul className='ft-list'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Updates</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Partners</a></li> 
                        </ul>
                    </div>
                    <div className='col-sm-3'>
                        <h5>Support</h5>
                        <ul className='ft-list'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy Policy</a></li> 
                        </ul> 
                    </div>
                </div>
            </div>
            </div>
        </div>
 </div>
</footer>
<footer className='last-footer'>
    <div className='container'>
        <div className='row mobile-reverse'>
            <div className='col-sm-8'>
                <p className='copy-text'>© 2023 The Talent Point. All rights reserved</p>
            </div>
            <div className='col-sm-4'>
               <ul className='social-icons'>
               <li><a href="#" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
               <li><a href="#" target='_blank'><i className="fa-brands fa-twitter"></i></a></li>
               <li><a href="#" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
               </ul>
            </div>
        </div>
    </div>
</footer>
        </>
    )
}
