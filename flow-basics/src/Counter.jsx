import React, { useState } from 'react'


const Counter = () => {
    const[value,setValue] = useState("");
    const handleChange = debounce((event)=>{
        console.log("API Call with the value ",event.target.value);
    },500)

    function debounce(func,delay){
        let timeout;
        return function(...args){
            clearTimeout(timeout);
            timeout = setTimeout(()=>func(...args),delay);
        }
    }
  return (
    <div>
        <input
        onChange={(e)=>{
            setValue(e.target.value)
            handleChange(e)
        }}
         
         placeholder='Type Something'>

        </input>
    </div>
  )
}

export default Counter