import React from 'react';

export default function Employers() {
    return (
        <> 
       <div className='dash-right'>
            <h1>Employers</h1>
            <div className='sort-d-flex mt-4'>
                <p className='sort-by'>Sort By:</p>
                <select className='all-recent'>
                    <option>All/Recent/Active/Exp</option>
                    <option>All/Recent/Active/Exp 2</option>
                    <option>All/Recent/Active/Exp 3</option>
                    <option>All/Recent/Active/Exp 4</option>
                </select>
            </div>

            <div className="table-part mt-4"> 
                <table className="rwd-table">
                    <tbody>
                    <tr>
                        <th>COMPANY NAME <i className="fa-solid fa-align-left"></i></th>
                        <th className='w-18'>LOCATION <i className="fa-solid fa-align-left"></i></th>
                        <th>TEAM MEMBERS <i className="fa-solid fa-align-left"></i></th>
                        <th>JOB POST <i className="fa-solid fa-align-left"></i></th>
                        <th>ACCOUNT  </th>
                        <th>MANAGE  </th>
                    </tr>
                    <tr>
                        <td data-th="COMPANY NAME">
                           <p className='c-n'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25'  /> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25 mrl-1'  />
                              Microsoft
                            </p> 
                        </td>
                        <td data-th="LOCATION">
                         <p className='location'>Dubai, United Arab Emirates</p>
                        </td>
                        <td data-th="TEAM MEMBERS">
                         <p className='team-m'>3 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="JOB POS">
                        <p className='team-m'>69 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="ACCOUNT">
                         <button className='pro'>PRO <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/pro.png'} alt=" pro" className='w-25 '  /></button>
                        </td>
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>
                    <tr>
                        <td data-th="COMPANY NAME">
                           <p className='c-n'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25'  /> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25 mrl-1'  />
                              Microsoft
                            </p> 
                        </td>
                        <td data-th="LOCATION">
                         <p className='location'>Dubai, United Arab Emirates</p>
                        </td>
                        <td data-th="TEAM MEMBERS">
                         <p className='team-m'>3 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="JOB POS">
                        <p className='team-m'>69 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="ACCOUNT">
                         <button className='pro'>PRO <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/pro.png'} alt=" pro" className='w-25 '  /></button>
                        </td>
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>
                    <tr>
                        <td data-th="COMPANY NAME">
                           <p className='c-n'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25'  /> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25 mrl-1'  />
                              Microsoft
                            </p> 
                        </td>
                        <td data-th="LOCATION">
                         <p className='location'>Dubai, United Arab Emirates</p>
                        </td>
                        <td data-th="TEAM MEMBERS">
                         <p className='team-m'>3 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="JOB POS">
                        <p className='team-m'>69 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="ACCOUNT">
                         <button className='free'>FREE <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/free.png'} alt=" free" className='w-25 '  /></button>
                        </td>
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>
                    <tr>
                        <td data-th="COMPANY NAME">
                           <p className='c-n'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25'  /> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25 mrl-1'  />
                              Microsoft
                            </p> 
                        </td>
                        <td data-th="LOCATION">
                         <p className='location'>Dubai, United Arab Emirates</p>
                        </td>
                        <td data-th="TEAM MEMBERS">
                         <p className='team-m'>3 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="JOB POS">
                        <p className='team-m'>69 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="ACCOUNT">
                         <button className='pro'>PRO <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/pro.png'} alt=" pro" className='w-25 '  /></button>
                        </td>
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>
                    <tr>
                        <td data-th="COMPANY NAME">
                           <p className='c-n'>
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25'  /> 
                            <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/logo-img.png'} alt=" logo-img" className='w-25 mrl-1'  />
                              Microsoft
                            </p> 
                        </td>
                        <td data-th="LOCATION">
                         <p className='location'>Dubai, United Arab Emirates</p>
                        </td>
                        <td data-th="TEAM MEMBERS">
                         <p className='team-m'>3 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="JOB POS">
                        <p className='team-m'>69 <span className='f-12'>(View)</span></p>
                        </td>
                        <td data-th="ACCOUNT">
                         <button className='free'>FREE <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/free.png'} alt=" free" className='w-25 '  /></button>
                        </td>
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>
                    
                    </tbody>
                </table> 
           </div>
           
         
        </div>
        </>
    )
}