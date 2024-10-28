import React, { useContext } from 'react'
import { context } from './UseContextHook'
import ThemeToggle from './ThemeToggle';
export default function ContextDisplay3() {
    const data3 = useContext(context);
  return (
    <div>
        <h3>Display 3</h3>
        <ol>
            {
                data3.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ol>

    </div>
  )
}
