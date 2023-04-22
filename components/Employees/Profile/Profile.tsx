import React from 'react';

export default function Profile() {
    return (
        <>
        <div className="dash-right"> 
            <h1>My <span className='span-color'>Profile</span></h1>
            <div className='row m-column-reverse'>
                <div className='col-sm-7'>
                    <ul className='list-loc m-m-0 mt-4'>
                        <li><a href="#">Overview</a></li>
                        <li className='active'><a href="#">Profile</a></li>
                        <li><a href="#">Preferences</a></li> 
                    </ul>
                </div>
                <div className='col-sm-5'>
                    <ul className='blue-text-line mt-4 text-right'> 
                        <li><a href="#">Profile Stats</a></li>
                        <li><a href="#">View Public Profile</a></li> 
                    </ul>
                </div>
            </div>
            
             <div className='data-management m-p-10'>
             <div className='work-experience-fieild m-p-10'>
              <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='left-text-fieild'>
                      <h3 className=' m-center'>About</h3>
                      <p className='c-747474  m-center'>Tell us about yourself</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'> 
                    <div className='row'>
                     <div className='col-lg-2 col-md-3 col-12'>
                        <div className="dash-profile-img mb-4 m-auto">
                            <p className='f-12 c-2C2C2C m-center'>Profile Picture</p>
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2"  /> 
                         
                        </div> 
                     </div>
                     <div className='col-lg-10 col-md-9 col-12'>
                         <div className='uploade-btn'>
                            <input type='file' /> 
                            <button className="btn-a primary-size-16 btn-bg-0055BA mt-5 mb-4 mobile-m-0"><i className="fa-solid fa-upload"></i> Upload A New Photo</button>
                         </div>
                     </div> 
                    </div>
                    <form className='form-experience-fieild'>
                    <label>Your Name*</label>
                    <input type='text' placeholder='Alan Moore' className='fild-des'/>

                    <div className='row'>
                     <div className='col-sm-6'>
                      <label>Email ID*</label>
                      <input type='text' placeholder='alanmoore@gmail.com' className='fild-des'/>
                     </div>
                     <div className='col-sm-6'>
                      <label>Contact Number*</label>
                      <input type='number' placeholder='(+971) 123 – 456 – 7890' className='fild-des'/> 
                     </div>
                    </div>

                    <div className='row'>
                     <div className='col-sm-6'>
                      <label>Date of Birth*</label>
                      <input type='date' className='fild-des'/>
                     </div>
                     <div className='col-sm-6'>
                      <label>Gender</label>
                       <select  className='fild-des'>
                        <option>Male</option>
                        <option>Female</option>
                       </select> 
                     </div>
                    </div>
                    
                    <label>Where are you currently based?*</label>
                    <select  className='fild-des'>
                        <option>Dubai</option>
                        <option>Dubai 2</option>
                    </select>

                    <div className='row'>
                     <div className='col-sm-6'>
                       <label>Your Current Role*</label>
                       <select  className='fild-des'>
                        <option>Software Engineer</option>
                        <option>Software Engineer 2</option>
                       </select> 
                     </div>
                     <div className='col-sm-6'>
                      <label>Years of Experience</label>
                       <select  className='fild-des'>
                        <option>2-3 Years</option>
                        <option>2-3 Years</option>
                       </select> 
                     </div>
                    </div>

                    <div className='row'>
                     <div className='col-sm-6'>
                       <label>Current Salary</label>
                       <select  className='fild-des'>
                        <option>AED 10000</option>
                        <option>Software Engineer 2</option>
                       </select> 
                     </div>
                     <div className='col-sm-6'>
                      <label>Desired Salary</label>
                       <select  className='fild-des'>
                        <option>AED</option>
                        <option>15000</option>
                       </select> 
                     </div>
                    </div>

                    <label>Your Bio**</label>
                    <textarea placeholder='B. Tech from Georgia Institute of Technology, Coding wizard, working on an AI tool to assist developers, previously worked at Meta.' className='fild-des'></textarea>                

                    <div className='text-right mt-3'>
                      <button className='cancel'>Cancel</button>
                      <button className='save'>Save</button>
                    </div>

                  </form>
                     
                </div>
              </div>
            </div>

             </div>
        </div>
        </>
    )
}