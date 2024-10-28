import React, { useCallback, useRef, useState } from 'react'

export default function UseCallbackHook() {

    const [color,setColor] = useState('')
    const refer = useRef()
    
    const handleChange = useCallback(() =>{
        refer.current.style.background = color
    },[color]);
  return (
    <div ref={refer}>
        <h1>useCallback Hook Demo</h1>
        <input type="text" name="" value={color} onChange={(e)=>{setColor(e.target.value)}} placeholder='enter color code' id="" />
        <button onClick={handleChange}>Change</button>
    </div>
  )
}
