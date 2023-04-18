import React from 'react';

export default function Dashboard() {
    return (
        <> 
        <div className='dash-right'>
            <h1>Home</h1>
            <div className='row mt-4'>
                <div className='col-lg-4 col-md-6'>
                  <div className='dash-card d-c-1'>
                    <div className='row'>
                        <div className='col-6'>
                            <h5 className='dash-card-h5'>1000</h5>
                        </div>
                        <div className='col-6'>
                            <div className='text-right'>
                                <h6>Active Jobs</h6>
                                <p className='f-12'>View All</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='dash-card d-c-2'>
                    <div className='row'>
                        <div className='col-6'>
                            <h5 className='dash-card-h5'>200</h5>
                        </div>
                        <div className='col-6'>
                            <div className='text-right'>
                                <h6>Employers</h6>
                                <p className='f-12'>View All</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='dash-card d-c-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <h5 className='dash-card-h5'>10,000</h5>
                        </div>
                        <div className='col-6'>
                            <div className='text-right'>
                                <h6>Candidates</h6>
                                <p className='f-12'>View All</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <p className='over mt-4 mb-4'>Overview</p>

            <div className='card-white'>
              <img src={process.env.NEXT_PUBLIC_BASE_URL+'images/graf-1.png'} alt=" graf-1" className='w-100'  />
            </div>
        </div>    
        </>
    )
}