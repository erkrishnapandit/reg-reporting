import React from 'react';

function ProcessLogs(){
    return(
        <div>
             <p className='border p-4 font-bold text-xl'>Process Log</p>

            <table className='w-full'>
                <thead className='border border-gray-400'>
                    <tr>
                        <th className='border border-gray-400 p-3'>Date</th>
                        <th className='border border-gray-400 p-3'>Info</th>
                    </tr>
                </thead>
                <tbody className='border border-gray-400'>
                    <tr className='border border-gray-400'>
                        <td className='border border-gray-400 p-3'>2025-04-23</td>
                        <td className='border border-gray-400 p-3'>Message1 Here</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='border border-gray-400 p-3'>2025-04-23</td>
                        <td className='border border-gray-400 p-3'>Message1 Here</td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='border border-gray-400 p-3'>2025-04-23</td>
                        <td className='border border-gray-400 p-3'>Message1 Here</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProcessLogs;