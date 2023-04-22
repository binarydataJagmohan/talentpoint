import React from 'react';

export default function Overview() {
    return (
        <>
            <div className="dash-right"> 
            <h1>My <span className='span-color'>Profile</span></h1>
            <div className='row m-column-reverse'>
                <div className='col-sm-7'>
                    <ul className='list-loc m-m-0 mt-4'>
                        <li className='active'><a href="#">Overview</a></li>
                        <li><a href="#">Profile</a></li>
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
            
             <div className='data-management'>
             <div className='work-experience-fieild'>
              <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='left-text-fieild'>
                      <h3>What employers will see</h3>
                      <p className='c-747474'>A glimpse into what recruiters look at on your profile</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                    <div className='text-right link-right-icons'>
                     <p >
                        <a href="#"><i className="fa-solid fa-globe"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                     </p>
                    </div>
                    <div className='row'>
                     <div className='col-sm-2 col-3'>
                        <div className="dash-profile-img mb-4 m-auto">
                         <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/Avatars-2.png'} alt="Avatars-2"  /> 
                            <a href="#"><i className="fa-solid fa-pen"></i> </a>
                        </div> 
                     </div>
                     <div className='col-sm-10 col-9'>
                        <h4 className='em-name'>Alan Moore</h4>
                        <h5 className='em-work'>Software Engineer @ Meta</h5>
                        <p className='f-12'><i className="fa-solid fa-location-dot"></i> Dubai, United Arab Emirates</p>
                     </div>
                     <div className='col-12'>
                        <p className='f-16 c-4D4D4D'>B. Tech from Georgia Institute of Technology, Coding wizard, working on an AI tool to assist developers, previously worked at Meta.</p>
                     </div>
                    </div>
                    <br/>
                    <p className='f-12 c-000 mb-0'>Work Experience</p>
                    <p className='f-18 '>Software Engineer</p>
                    <p className='f-16 c-0055BA w-600 '>Meta</p>
                    <p className='f-16 c-999999'>12/2020 - 02/2023</p>
                    <p className='f-16 c-4D4D4D'> Lorem ipsum dolor sit amet consectetur. Quis elementum mattis odio orci eu pellentesque odio velit. Egestas neque ipsum aliquet auctor dis pulvinar habitant. Id consectetur suspendisse scelerisque mattis mattis blandit nisl dolor sit. Faucibus enim ornare amet sit arcu consequat.</p>

                    <p className='f-18 mt-4'>Junior Software Engineer</p>
                    <p className='f-16 c-0055BA w-600 '>Twitter</p>
                    <p className='f-16 c-999999'>06/2020 - 12/2020</p>

                    <br/>
                    <p className='f-12 c-000 '>Education</p>

                    <p className='f-18 mt-4'>Master of Technology</p>
                    <p className='f-16 c-0055BA w-600 '>Master of Technology</p>
                    <p className='f-16 c-999999'>06/2017 - 06/2020</p>

                    <br/>
                    <p className='f-12 c-000 '>Skills</p>
                    <ul className='skills'>
                        <li><p className="cat">JavaScript</p></li>
                        <li><p className="cat">C++</p></li>
                        <li><p className="cat">Slack</p></li>
                        <li><p className="cat">SQL</p></li>
                        <li><p className="cat">Python</p></li>
                        <li><p className="cat">Java</p></li>
                        <li><p className="cat">HTML/CSS</p></li>
                    </ul>
                </div>
              </div>
            </div>

             </div>
        </div>
        </>
    )
}