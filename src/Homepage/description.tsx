import { Button } from '@mui/material'
import React from 'react'

const description = () => {
  return (
    <div className='flex flex-col p-5 w-2/5 justify-center h-full z-40'>
            <div className='space-y-15'>
            <h2 className='mb-10 text-3xl font-semibold text-white' style={{fontFamily:'Cedarville Cursive'}}>Brief Intro</h2>
            <span className='text-center text-xl text-white' style={{fontFamily:'Cedarville Cursive'}}>
                Madison is fueled by her passion for understanding the nuances of cross-cultural 
                advertising. She considers herself a "forever student," eager to both build on her 
                academic foundations in psychology and sociology, and stays in tune with the latest 
                digital marketing strategies through continued coursework and professional development.
            </span>
            <br/>
            <Button variant="contained" style={{marginTop:'10px',background:'#86377b'}}>DOWNLOAD</Button>
            <Button variant="contained" style={{marginLeft:'10px', marginTop:'10px',background:'#247ffe'}}>HIRE</Button>
        </div>
    </div>
  )
}

export default description