import React from 'react';

export default function Inbox() {
    return (
        <>
           <div className="dash-right"> 
            <h1>My <span className='span-color'>Profile</span></h1>
            <div className='row '>
                <div className='col-sm-12'>
                    <ul className='list-loc m-m-0 mt-4'>
                        <li className='active'><a href="#">Inbox <span className="tab-span-sa c-0070F5">12</span></a></li>
                        <li><a href="#">Interviews <span className="tab-span-sa">12</span></a></li>
                        <li><a href="#">Archived <span className="tab-span-sa">12</span></a></li> 
                    </ul>
                </div> 
            </div>
            
             <div className='data-management m-p-10'>
             <div className='work-experience-fieild m-p-10'>
              <div className='row'>
                <div className='col-sm-6'>
                    <p className='f-22 m-center'>Inbox</p>
                </div>
                <div className='col-sm-6 text-right'>
                  <p className='f-16 c-BABABA m-center'>You have 4 messages.</p>
                </div>
              </div>

              <div className='box-text-img bg-CFE5FF'>
                <div className='row'>
                    <div className='col-sm-1 text-center'>
                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1"  className="w-40"/> 
                    </div>
                    <div className='col-sm-9'>
                        <p className='f-16 c-4D4D4D w-700 '>Recruiter/Company Name</p>
                        <p className='f-16 w-600'>Lorem ipsum dolor sit amet consectetur. At eget convallis in aliquam sit.Lorem ipsum dolor...</p>
                    </div>
                    <div className='col-sm-2 text-right'>
                        <p className='f-16 c-4D4D4D  '>1:20PM</p>
                    </div>
                </div>
              </div>

              <div className='box-text-img'>
                <div className='row'>
                    <div className='col-sm-1 text-center'>
                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1"  className="w-40"/> 
                    </div>
                    <div className='col-sm-9'>
                        <p className='f-16 c-4D4D4D w-700 '>Recruiter/Company Name</p>
                        <p className='f-16 w-600'>Lorem ipsum dolor sit amet consectetur. At eget convallis in aliquam sit.Lorem ipsum dolor...</p>
                    </div>
                    <div className='col-sm-2 text-right'>
                        <p className='f-16 c-4D4D4D  '>1:20PM</p>
                    </div>
                </div>
              </div>

              <div className='box-text-img bg-CFE5FF'>
                <div className='row'>
                    <div className='col-sm-1 text-center'>
                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1"  className="w-40"/> 
                    </div>
                    <div className='col-sm-9'>
                        <p className='f-16 c-4D4D4D w-700 '>Recruiter/Company Name</p>
                        <p className='f-16 w-600'>Lorem ipsum dolor sit amet consectetur. At eget convallis in aliquam sit.Lorem ipsum dolor...</p>
                    </div>
                    <div className='col-sm-2 text-right'>
                        <p className='f-16 c-4D4D4D '>1:20PM</p>
                    </div>
                </div>
              </div>

              <div className='box-text-img'>
                <div className='row'>
                    <div className='col-sm-1 text-center'>
                    <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-1.png'} alt="Avatars-1"  className="w-40"/> 
                    </div>
                    <div className='col-sm-9'>
                        <p className='f-16 c-4D4D4D w-700 '>Recruiter/Company Name</p>
                        <p className='f-16 w-600'>Lorem ipsum dolor sit amet consectetur. At eget convallis in aliquam sit.Lorem ipsum dolor...</p>
                    </div>
                    <div className='col-sm-2 text-right'>
                        <p className='f-16 c-4D4D4D  '>1:20PM</p>
                    </div>
                </div>
              </div> 
            </div>

             </div>
        </div>
        </>
    )
}