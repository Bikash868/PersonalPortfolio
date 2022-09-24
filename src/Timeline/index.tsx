import React, {useState} from 'react'
import {TimelineData} from './TimelineData'
import './index.css'
import { ReactComponent as WorkIcon } from  '../Images/work.svg';
import { ReactComponent as SchoolIcon } from "../Images/school.svg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import Skills from './Skills';

const TimeLine = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <div className='text-center text-white' style={{fontSize:'30px'}}>
          <span>Work experience & Education</span>
      </div>
      <VerticalTimeline>
        {TimelineData.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="timeLinedate"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              <p id="techStack" style={{marginTop:'0px'}}>{element.techStack}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <Skills/>
    </div>
  );
}

export default TimeLine