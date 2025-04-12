import React from "react";

function AIAnomalieCheck(){
    return(
        <div className="rounded-[6px]">
            <p className='p-4 font-bold text-2xl'>AI Anomalies Check</p>
             <table className='w-full border-collapse rounded-lg'>
                <thead className='border border-gray-400'>
                    <tr>
                        <th className='border border-gray-400 p-3'>Report</th>
                        <th className='border border-gray-400 p-3'>Download</th>
                    </tr>
                </thead>
                <tbody className='border border-gray-400'>
                    <tr className='border border-gray-400'>
                        <td className='border border-gray-400 p-3'>Error Message</td>
                        <td className='border border-gray-400 p-3'>Download</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default AIAnomalieCheck;