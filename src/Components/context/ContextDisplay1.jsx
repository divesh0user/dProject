import React, { useContext } from 'react'
import { context } from './UseContextHook'

export default function ContextDisplay1() {
    const data1 = useContext(context);
  return (
    <div>
        <h3>Display 1</h3>
        <ol>
            {
                data1.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ol>

    </div>
  )
}
