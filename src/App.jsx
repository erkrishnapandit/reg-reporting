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
      <div className='flex flex-col border mx-30'>
        <div className='flex border p-4 flex-row justify-between mx-6'>
          <p className='font-bold text-2xl'>REG REPORTING</p>
          <p>USER</p>
        </div>
        <div className='flex flex-col  md:flex-row justify-between'>
          <div className='w-full md:w-1/2'>
            <div className='border rounded-[6px] p-5 mx-6 md:ms-6 my-6'><ReportOverview/></div>
            <div className='border rounded-[6px] p-5 mx-6 md:ms-6 my-6'><DataQualitySummary/></div>
            <div className='border rounded-[6px] p-5 mx-6 md:ms-6 my-6'><ExcepttonKer/></div>
          </div > 
          <div className='w-full md:w-1/2' >
            <p className='border rounded-[6px] p-5 m-2 mx-6 md:me-6 my-6'><AIAnomalieCheck/></p>
            <p className='border rounded-[6px] p-5 m-2 mx-6 md:me-6 my-6'><UpcommingDeadline/></p>
            <p className='border rounded-[6px] p-5 m-2 mx-6 md:me-6 my-6'><ProcessLogs/></p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
