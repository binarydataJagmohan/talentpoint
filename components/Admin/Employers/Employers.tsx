import React from 'react';

export default function Employers() {
    return (
        <> 
       <div className='dash-right'>
            <h1>Employers</h1>
            <div className='sort-d-flex mt-5'>
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
                        <th>COMPANY NAME</th>
                        <th>LOCATION</th>
                        <th>TEAM MEMBERS</th>
                        <th>JOB POST</th>
                        <th>ACCOUNT</th>
                        <th>MANAGE</th>
                    </tr>
                    <tr>
                        <td data-th="Supplier Code">
                        UPS5005
                        </td>
                        <td data-th="Supplier Name">
                        UPS
                        </td>
                        <td data-th="Invoice Number">
                        ASDF19218
                        </td>
                        <td data-th="Invoice Date">
                        06/25/2016
                        </td>
                        <td data-th="Due Date">
                        12/25/2016
                        </td>
                        <td data-th="Net Amount">
                        $8,322.12
                        </td>
                    </tr>
                    
                    </tbody>
                </table> 
           </div>
           
         
        </div>
        </>
    )
}