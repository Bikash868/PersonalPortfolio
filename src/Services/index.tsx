import React, {useState} from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import User from './User';

const Services = (props:any) => {
  const users = [
    {id:1, name:'anita',email:'anita@gmail.com'},
    {id:2, name:'ankita',email:'ankita@gmail.com'},
    {id:3, name:'anil',email:'anil@gmail.com'},
    {id:4, name:'Prakash',email:'prakash@gmail.com'},
    {id:5, name:'akash',email:'akash@gmail.com'},

  ]
  return (
    <div className="App">
      <Router>
        {
          users.map((user)=> 
            <h3><Link to={"/user/"+user.id}>{user.name}</Link></h3>
          )
        }
        <Routes>
          <Route path="/user/:id" element={<User/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Services