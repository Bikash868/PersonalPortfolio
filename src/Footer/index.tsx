import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const IconStyle = {
    height:'30px',
    width:'30px',
  }
  const handleInstaClick = () => {
    window.open('https://www.instagram.com/_3ikash/')
  }
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/bikash-das-352683183/')
  }

  const handleMailClick = () => {
    // window.location.assign("mailto:ursbikash868@gmail.com");
    window.open('https://github.com/Bikash868?tab=repositories')
  }

  return (
    <div className='flex flex-col mt-5 justify-center items-center z-40'>
      <div className='space-x-5'>
        <InstagramIcon className='hover:scale-125 ease-in duration-500 cursor-pointer' style={IconStyle} onClick = {handleInstaClick}/>
        <LinkedInIcon className='scale-100 hover:scale-125 ease-in duration-500 cursor-pointer' style={IconStyle} onClick = {handleLinkedInClick}/>
        <GitHubIcon className='scale-100 hover:scale-125 ease-in duration-500 cursor-pointer' 
          style={IconStyle} 
          onClick = {handleMailClick}/>
      </div>
      <span className='text-sm mt-2' style={{fontFamily:'Cedarville Cursive'}}>© 2022 Bikash Das. All rights reserved | Vews: 200</span>
    </div>
  )
}

export default Footer