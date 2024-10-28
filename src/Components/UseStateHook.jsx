import React, { useContext, useState } from 'react'

export default function UseStateHook() {
  const [val, setVal] = useState(0);

  return (
    <div>
      <button onclick={()=>{setVal(1)
      }}>
        State 1</button>
      <button onclick={()=>{setVal(2)
      }}>
        State 2</button>
    </div>
    
  )
}
