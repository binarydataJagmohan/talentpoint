import React from 'react';

export default function Applications() {
    return (
        <>
          <div className='dash-right'> 
             <h1 className='data'>My <span className='span-color'>Applications</span></h1>
             <div className='row m-column-reverse mt-3 mb-3'>
                <div className='col-sm-3 pr-0'> 
                    <div className="sort-d-flex mt-4">
                        <p className="sort-by">Sort By:</p>
                        <select className="all-recent w-75">
                            <option>Selected</option>
                            <option>Selected 2</option> 
                            </select>
                    </div>
                </div>
                <div className='col-sm-3 pl-0'> 
                    <div className="sort-d-flex mt-4">
                        <p className="sort-by">Filter By: </p>
                        <select className="all-recent  w-75    ">
                            <option>Selected</option>
                            <option>Selected 2</option> 
                            </select>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <ul className='blue-text-line mt-4 text-right'>  
                        <li><a href="#">View Public Profile</a></li> 
                    </ul>
                </div>
            </div>
            <div className='data-management'>
             <div className="table-part mt-4"> 
                <table className="rwd-table">
                    <tbody>
                    <tr>
                        <th>COMPANY</th> 
                        <th>POSITION  </th>
                        <th>APPLIED ON  </th>
                        <th>STATUS  </th>
                    </tr>
                    <tr>
                        <td data-th="COMPANY">
                           <p className='c-n'> 
                           Microsoft
                            </p> 
                        </td>
                        <td data-th="POSITION">
                         <p className='f-18 w-600'>Software Engineer</p>
                        </td>
                        <td data-th="APPLIED ON ">
                        <p className='f-18 c-4D4D4D w-400'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="STATUS">
                          <button className="btn-app bg-D57B11-app">Pending</button>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="COMPANY">
                           <p className='c-n'> 
                           Microsoft
                            </p> 
                        </td>
                        <td data-th="POSITION">
                         <p className='f-18 w-600'>Software Engineer</p>
                        </td>
                        <td data-th="APPLIED ON ">
                        <p className='f-18 c-4D4D4D w-400'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="STATUS">
                          <button className="btn-app bg-0055BA-app">Under Review</button>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="COMPANY">
                           <p className='c-n'> 
                           Microsoft
                            </p> 
                        </td>
                        <td data-th="POSITION">
                         <p className='f-18 w-600'>Software Engineer</p>
                        </td>
                        <td data-th="APPLIED ON ">
                        <p className='f-18 c-4D4D4D w-400'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="STATUS">
                          <button className="btn-app bg-0055BA-app">Reviewed</button>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="COMPANY">
                           <p className='c-n'> 
                           Microsoft
                            </p> 
                        </td>
                        <td data-th="POSITION">
                         <p className='f-18 w-600'>Software Engineer</p>
                        </td>
                        <td data-th="APPLIED ON ">
                        <p className='f-18 c-4D4D4D w-400'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="STATUS">
                          <button className="btn-app bg-3D9F79-app">Shortlisted</button>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="COMPANY">
                           <p className='c-n'> 
                           Microsoft
                            </p> 
                        </td>
                        <td data-th="POSITION">
                         <p className='f-18 w-600'>Software Engineer</p>
                        </td>
                        <td data-th="APPLIED ON ">
                        <p className='f-18 c-4D4D4D w-400'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="STATUS">
                          <button className="btn-app bg-D04E4F-app">Declined</button>
                        </td>
                    </tr>

                    <tr>
                        <td data-th="COMPANY">
                           <p className='c-n'> 
                           Microsoft
                            </p> 
                        </td>
                        <td data-th="POSITION">
                         <p className='f-18 w-600'>Software Engineer</p>
                        </td>
                        <td data-th="APPLIED ON ">
                        <p className='f-18 c-4D4D4D w-400'>united-arab-emirates</p>
                        </td>
                     
                        <td data-th="STATUS">
                          <button className="btn-app bg-bababa-app">Closed</button>
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