import React from 'react'
import { ReactComponent as WorkIcon } from  '../Images/work.svg';
import { ReactComponent as SchoolIcon } from "../Images/school.svg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import {CodingProfileData} from './TimelineData'
import { ReactComponent as HackerRankIcon } from '../Images/HackerRank.svg'

import { Link } from 'react-router-dom';
import './index.css'


const CodingProfileTimeline = () => {
    let workIconStyles = { background: "#06D6A0" };

  return (
    <div className=' m-5'>
        <div className='text-center text-white' style={{fontSize:'30px'}}>
          <span>Coding Profile</span>
      </div>
      <VerticalTimeline>
        {CodingProfileData.map((element) => {
          
        //   const LogoIcon = () => {
        //     switch(element.title) {
        //         case "Codechef":
        //             return <CodechefIcon/>;
        //         case "HackerRank":
        //             return <HackerRankIcon/>;
        //         case "LeetCode":
        //             return <LeetCodeIcon/>;
        //         default:
        //             return <IbIcon/>

        //     }
        //   }

          return (
            <VerticalTimelineElement
              key={element.id}
              dateClassName="timeLinedate"
              iconStyle={workIconStyles}
              contentStyle={{ background: '#F2F1F1', color: '#fff', borderTop:'4px solid #06D6A0',}}
              contentArrowStyle={{ borderRight: '7px solid  #F2F1F1' }}
              icon={<HackerRankIcon/>}
            >
              <h3 className="vertical-timeline-element-title text-center text-xl" style={{color:'#84377a'}}>
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle flex justify-evenly" style={{color:'rgb(100,50,100)'}}>
                <span>
                  <a href={element.profile} style={{textDecoration:'underline'}}>{element.userName}</a>
                </span>
                <span>
                <span>Rating: {element.rating} ({element.description})</span>
                </span>
              </h5>
              <p></p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  )
}

export default CodingProfileTimeline