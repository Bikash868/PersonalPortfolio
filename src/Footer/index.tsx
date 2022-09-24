import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const IconStyle = {
    height:'30px',
    width:'30px',
    "&:hover": {
      color: "red"
    }
  }
  return (
    <div className='flex flex-col mt-5 justify-center items-center z-40'>
      <div className='space-x-5'>
        <InstagramIcon className='hover:scale-125 ease-in duration-500' style={IconStyle}/>
        <LinkedInIcon className='scale-100 hover:scale-125 ease-in duration-500' style={IconStyle}/>
        <EmailIcon className='scale-100 hover:scale-125 hover:color-red ease-in duration-500' style={IconStyle}/>
      </div>
      <span className='text-sm mt-2' style={{fontFamily:'Cedarville Cursive'}}>© 2022 Bikash Das. All rights reserved</span>
    </div>
  )
}

export default Footer