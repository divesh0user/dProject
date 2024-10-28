import React, { createContext, useState } from 'react';
import ContextDisplay1 from './ContextDisplay1';
import ContextDisplay2 from './ContextDisplay2';
import ContextDisplay3 from './ContextDisplay3';
export const context = createContext(); 

export default function UseContextHook() {
    
    const [text,setText] = useState("");
    const [data,setData] = useState([]);

    function handleClick(){
        setData((prev)=>[
            ...prev,text
        ])
    }
    
    return (
    <div>
        <label htmlFor="">Enter A Text</label>
        <input type="text" name="" value={text} onChange={(e)=>{setText(e.target.value)}} id="" />
        <button onClick={handleClick}>Click</button>
        <button>Change Theme</button>

        <context.Provider value={data}>
            <ContextProvider />
        </context.Provider>

    </div>
  )
}

function ContextProvider(){
    return(
        <div>
            <ContextDisplay1 />
            <ContextDisplay2 />
            <ContextDisplay3 />
        </div>
    )
}
