import React, { useContext } from 'react'
import { context } from './UseContextHook'
export default function ContextDisplay2() {
    const data2 = useContext(context)
  return (
    <div>
        <h3>Display 2</h3>

        <ol>
        {
                data2.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ol>
    </div>
  )
}
