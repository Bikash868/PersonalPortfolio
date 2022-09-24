import React from 'react'
import profileImage from '../Images/ProfileImage.jpeg'

const profilePhoto = () => {
  return (
    <div className='h-full flex items-center z-40' style={{width:'350px'}}>
        <img className='w-full bg-amber-300' src = {profileImage} alt="profileImage" style={{height:'350px',borderRadius:'50%'}}/>

    </div>
  )
}

export default profilePhoto