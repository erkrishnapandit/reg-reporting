import React from 'react';
import { PieChart } from './PieChart';

function DataQualitySummary(){
    return (
        <>
        <p>Data Quality Summary</p>
        <div className='flex flex-col md:flex-row justify-between'>
           <div className='w-full md:w-1/2'>
             <PieChart/>
        </div>
        <div className='w-full md:w-1/2 p-6 my-auto'>
            <ul className="mt-2 text-xl">
                <li className="text-gray-600">○ Valid</li>
                <li className="text-gray-600">○ Invalid</li>
                <li className="text-gray-600">○ Warning</li>
            </ul>
        <button className="mt-2 bg-blue-500  text-2xl text-white px-4 py-2 rounded">Re-validate</button>
        </div>
       </div>
        </>
    )
}

export default DataQualitySummary; 