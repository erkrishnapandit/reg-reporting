import React from 'react';

function ExcepttonKer(){
    return(
        <div>
             <p className='p-4 font-bold text-2xl'>Exceptton Ker</p>
            <div className='border border-gray-300 w-full rounded-[4px]'>

            <table className='w-full'>
                <thead className='border border-gray-300'>
                    <tr>
                        <th className='border border-gray-400 p-3'>Record</th>
                        <th className='border border-gray-400 p-3'>Download</th>
                    </tr>
                </thead>
                <tbody className='border border-gray-400'>
                    <tr className='border border-gray-400'>
                        <td className='border border-gray-400 p-3'>Error Message</td>
                        <td className='border border-gray-400 p-3'>Download</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='border border-gray-400 p-3'>Error Message</td>
                        <td className='border border-gray-400 p-3'>Download</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='border border-gray-400 p-3'>Error Message</td>
                        <td className='border border-gray-400 p-3'>Download</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ExcepttonKer