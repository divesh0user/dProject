import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {

    const [num,setNum] = useState(0);

    const loop = useMemo(()=>{
        return num*num*num
    },[num])
  return (
    <div>

        <input type="number" name="" value={num} onChange={(e)=>{setNum(e.target.value)}} id="" />
        <h1>
            Result : {num}<br />
            Loop : {loop}
        </h1>
    </div>
  )
}
