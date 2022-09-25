import React  from 'react'
import Card from './Card'
import Carousel from 'react-elastic-carousel';
import './index.css'
import {allProjects} from './ProjectData'

const breakPoints = [
  { width: 1, itemsToShow: 1 ,itemsToScroll: 1},
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 4 , itemsToScroll: 2}
];

function Projects() {

  return (
    <div className='flex w-full border-2 p-5 justify-center align-center' style={{height:'90%vh'}}>
      <Carousel breakPoints={breakPoints}>
          {allProjects.map((project,index)=>
            <div key={project.id}>
              <Card
                id = {index}
                name = {project.name}
                description = {project.description}
                techStack = {project.techStack}
                knowMoreUrl = {project.knowMoreUrl}
                imageUrl = {project.imageUrl}
              />
            </div>)}
        </Carousel>
    </div>
  )
}


export default Projects