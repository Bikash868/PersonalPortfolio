import React from 'react'
import { useSearchParams } from "react-router-dom";

const User = (props:any) => {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)

  return (
    <h1>User</h1>
  )
}

export default User