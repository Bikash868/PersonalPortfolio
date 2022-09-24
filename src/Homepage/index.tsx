import React from 'react'
import Description from './description'
import ProfilePhoto from './profilePhoto'

const HomePage = () => {

  return (
    <div className='flex w-4/5 border-2 space-x-15 justify-evenly float-right mr-20' style={{height:'500px'}}>
      <Description/>
      <ProfilePhoto/>
    </div>
  )
}

export default HomePage