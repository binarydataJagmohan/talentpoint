import React from 'react';

export default function JobPreferences() {
    return (
        <>
            <div className="dash-right"> 
            <h1>My <span className='span-color'>Profile</span></h1>
            <div className='row m-column-reverse'>
                <div className='col-sm-7'>
                    <ul className='list-loc m-m-0 mt-4'>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Profile</a></li>
                        <li className='active'><a href="#">Preferences</a></li> 
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
                      <h3 className=' m-center'>Job Preferences</h3>
                      <p className='c-747474  m-center'>How would you like to find jobs?</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'> 
                 
                    <form className='form-experience-fieild'>
                    <label>Where are you in job search?*</label>
                    <select  className='fild-des'>
                        <option>Ready to Interview</option>
                        <option>Ready to Interview 2</option>
                    </select>
 
                    <label>What kind of openings are you looking for?</label>
                    <select  className='fild-des'>
                        <option>Select an opening</option>
                        <option>Select an opening 2</option>
                    </select>

                    <ul className='skills'>
                        <li><p className="cat">Full-time <i className="fa-solid fa-xmark"></i></p></li>
                        <li><p className="cat">Remote <i className="fa-solid fa-xmark"></i></p></li> 
                    </ul>
 
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