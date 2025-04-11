import React from 'react';

function UpcommingDeadline(){
    return(
        <div>
            <p className='border p-3 font-bold text-xl'>Upconning Deadline</p>
            <div>
                <p className='p-3'>April 25</p>
                <hr className='h-px border-0 bg-gray-400' />
                <p className='p-3'>April 28</p>
                <hr className='h-px border-0 bg-gray-400' />
                <p className='p-3'>May 3</p>
            </div>
        </div>
    )
}

export default UpcommingDeadline;