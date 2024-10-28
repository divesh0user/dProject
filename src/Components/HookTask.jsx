import React, { useState } from 'react'
import {Bikes} from './UseStateHookArr'
export default function HookTask() {
    const[data, setData] = useState(Bikes)
    function getdata(){
        const ip = document.querySelectorAll('input')
    }
  return (
    <div>
        <h1>Search Bikes</h1>
        <input type="text" placeholder='Enter the Name'/>
        <button>Search</button>
    </div>
  )
}
