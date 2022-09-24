import React from 'react'
import { ReactComponent as WorkIcon } from  '../Images/work.svg';
import { ReactComponent as SchoolIcon } from "../Images/school.svg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import {CodingProfileData} from './TimelineData'
import { ReactComponent as CodechefIcon } from '../Images/codechef.svg'
import { ReactComponent as HackerRankIcon } from '../Images/HackerRank.svg'
import { ReactComponent as LeetCodeIcon } from '../Images/LeetCode.svg'
import { ReactComponent as IbIcon} from '../Images/HackerRank.svg'


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
            //   icon={WorkIcon}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.userName}{` `} {element.rating}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  )
}

export default CodingProfileTimeline