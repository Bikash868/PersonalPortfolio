import React,{useState} from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import CodingProfileTimeline from './CodingProfileTimeline';
import {skills} from './TimelineData';

const SmallCard = (props:any) => {
    return(
    <div className='flex flex-col align-center justify-center border-2 m-5 p-2' style={{height:'130px',width:'120px'}}>
        <h1 className='mt-2 text-center'>{props.name}</h1>
        <h2 className='mt-2 mb-2 text-center'>{props.yoe}</h2>
        <LinearProgress variant="determinate" value={props.progress}/>
    </div>
    )
}
const Skills = () => {

 
  return (
    <div className='flex flex-col' style={{backgroundColor:'#86377a',height:'auto'}}>
        <div className='text-center text-white' style={{fontSize:'30px'}}>
            <span>Skills</span>
        </div>
        <div className='flex'>
        { skills.map((skill)=><SmallCard name={skill.name} yoe={skill.yoe} progress={skill.progress} key={skill.id}/>) }
        </div>
        <CodingProfileTimeline/>
    </div>
  )
}

export default Skills