import React , { useState } from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Projects = () => {
  const [value,setValue] = useState(0)
  return (
    <div className='flex w-full border-2 space-x-15 space-y-15 justify-evenly' style={{height:'530px'}}>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
// const Services = (props:any) => {
//   const users = [
//     {id:1, name:'anita',email:'anita@gmail.com'},
//     {id:2, name:'ankita',email:'ankita@gmail.com'},
//     {id:3, name:'anil',email:'anil@gmail.com'},
//     {id:4, name:'Prakash',email:'prakash@gmail.com'},
//     {id:5, name:'akash',email:'akash@gmail.com'},

//   ]
//   return (
//     <div className="App">
//       <Router>
//         {
//           users.map((user)=> 
//             <h3><Link to={"/user/"+user.id}>{user.name}</Link></h3>
//           )
//         }
//         <Routes>
//           <Route path="/user/:id" element={<User/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

export default Projects


