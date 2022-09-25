import React , { useState } from 'react'
import Card from './Card'
import Carousel from 'react-elastic-carousel';
import './index.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 ,itemsToScroll: 1},
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 4 , itemsToScroll: 2}
];

function Projects() {

  const [value,setValue] = useState(0)
  return (
    <div className='flex w-full border-2 p-5 justify-center align-center' style={{height:'90%vh'}}>
      <Carousel breakPoints={breakPoints}>
          {/* <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/> */}
          {[...new Array(10)].map((ele,i)=><div><Card/></div>)}
        </Carousel>
    </div>
  )
}


export default Projects


