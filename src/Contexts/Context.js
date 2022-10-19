import React, {useState} from 'react'
import { createContext } from 'react'

export const user = createContext();

const Context = ({children}) => {
    const [val,setVal] = useState('');
  return (
    <user.Provider value={{val,setVal}}>    
        {children}
    </user.Provider>
  )
}

export default Context