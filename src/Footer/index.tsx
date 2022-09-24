import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='flex flex-col mt-5 justify-center items-center z-40'>
      <div className='space-x-5'>
        <InstagramIcon className='hover:scale-125 ease-in duration-500' style={{height:'30px',width:'30px'}}/>
        <LinkedInIcon className='scale-100 hover:scale-125 ease-in duration-500' style={{height:'30px',width:'30px'}}/>
        <EmailIcon className='scale-100 hover:scale-125 ease-in duration-500' style={{height:'30px',width:'30px'}}/>
      </div>
      <span className='text-sm mt-2' style={{fontFamily:'Cedarville Cursive'}}>© 2022 Bikash Das. All rights reserved</span>
    </div>
  )
}

export default Footer