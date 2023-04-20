import React from 'react';

export default function Sectors() {
    return (
        <>
        <div className='dash-right'> 
             <h1 className='data'>Data Management</h1>
             <ul className='list-loc mt-4'>
                <li><a href="#">Sectors</a></li>
                <li className='active'><a href="#">Locations</a></li>
                <li><a href="#">Infrastructure & Security</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Inquiries</a></li>
                <li><a href="#">+</a></li>
             </ul>

            <div className='data-management'>
             <div className="table-part mt-4"> 
                <table className="rwd-table">
                    <tbody>
                    <tr>
                        <th>NAME <i className="fa-solid fa-align-left"></i></th> 
                        <th>NOTE  </th>
                        <th>SLUG  </th>
                        <th>MANAGE  </th>
                    </tr>
                    <tr>
                        <td data-th="NAME">
                           <p className='c-n'> 
                           United Arab Emirates
                            </p> 
                        </td>
                        <td data-th="NOTE">
                         <p className='location'>-</p>
                        </td>
                        <td data-th="SLUG">
                        <p className='location'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="NAME">
                           <p className='c-n'> 
                           United Arab Emirates
                            </p> 
                        </td>
                        <td data-th="NOTE">
                         <p className='location'>-</p>
                        </td>
                        <td data-th="SLUG">
                        <p className='location'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="NAME">
                           <p className='c-n'> 
                           United Arab Emirates
                            </p> 
                        </td>
                        <td data-th="NOTE">
                         <p className='location'>-</p>
                        </td>
                        <td data-th="SLUG">
                        <p className='location'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="NAME">
                           <p className='c-n'> 
                           United Arab Emirates
                            </p> 
                        </td>
                        <td data-th="NOTE">
                         <p className='location'>-</p>
                        </td>
                        <td data-th="SLUG">
                        <p className='location'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="MANAGE">
                          <i className="fa-solid fa-pencil edit-pencil"></i>
                          <i className="fa-regular fa-trash-can del-trash"></i>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="NAME">
                           <p className='c-n'> 
                           United Arab Emirates
                            </p> 
                        </td>
                        <td data-th="NOTE">
                         <p className='location'>-</p>
                        </td>
                        <td data-th="SLUG">
                        <p className='location'>united-arab-emirates</p>
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

        </div>
        </>
    )
}