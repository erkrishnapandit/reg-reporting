import { useState } from 'react'
import './App.css'
import ReportOverview from './components/ReportOverview';
import DataQualitySummary from './components/DataQualitySummary';
import ExcepttonKer from './components/ExcepttonKer';
import ProcessLogs from './components/ProcessLogs';
import UpcommingDeadline from './components/UpcommingDeadline';
import AIAnomalieCheck from './components/AIAnomalieCheck';

function App() {


  return (
    <>
      <div className='flex flex-col border mx-2 md:mx-30 my-10'>
        <div className='flex p-4 flex-row justify-between mx-6'>
          <p className='font-bold text-2xl'>REG REPORTING</p>
          <p>USER</p>
        </div>
        <div className='flex flex-col  xl:flex-row justify-between'>
          <div className='flex flex-col justify-between w-full xl:w-1/2'>
            <div className='border-2 border-gray-300 rounded-[6px] p-5 mx-6 xl:ms-6 my-4'><ReportOverview/></div>
            <div className='border-2 border-gray-300 rounded-[6px] p-5 mx-6 xl:ms-6 my-4'><DataQualitySummary/></div>
            <div className='border-2 border-gray-300 rounded-[6px] p-5 mx-6 xl:ms-6 my-4'><ExcepttonKer/></div>
          </div > 
          <div className='flex flex-col justify-between w-full xl:w-1/2' >
            <p className='border-2 border-gray-300 rounded-[6px] p-5 m-2 mx-6 xl:me-6 my-4'><AIAnomalieCheck/></p>
            <p className='border-2 border-gray-300 rounded-[6px] p-5 m-2 mx-6 xl:me-6 my-4'><UpcommingDeadline/></p>
            <p className='border-2 border-gray-300 rounded-[6px] p-5 m-2 mx-6 xl:me-6 my-4'><ProcessLogs/></p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
