import { Button } from '@mui/material'
import React from 'react'
import './index.css'

const description = () => {

  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/1Pezo6gkVCNX7411HoHGwCVRqCTgPjQbS/view")
  }

  const handleHire = () => {
    window.open("https://forms.gle/6Fw8kdYUBuVp5mhcA")
  }

  return (
    <div className='flex flex-col p-5 w-3/5 justify-center h-full z-40'>
            <div className='space-y-15'>
            <div className='mb-10 text-3xl font-semibold text-white' style={{fontFamily:'Cedarville Cursive'}}>
              I'm Bikash Das
            </div>
            <span className='text-center text-xl text-white' style={{fontFamily:'serif'}}>
                I have completed my Bachelors from IIT(ISM) Dhanbad in Computer Science and Engineering.
                Where I mostly focused on Competative Programming, Data Structures and Core concepts like DBMS and OOPs.<br/><br/>

                Currently working at MAQ Software as Software Engineer 1, whrere I am responsible for writing efficenet code 
                to add new features in web applications using ReactJs framework.
            </span>
            <br/>
            <Button variant="contained" style={{marginTop:'10px',background:'#86377b'}} onClick={handleResumeDownload}>DOWNLOAD</Button>
            <Button variant="contained" style={{marginLeft:'10px', marginTop:'10px',background:'#247ffe'}} onClick={handleHire}>HIRE</Button>
        </div>
    </div>
  )
}

export default description