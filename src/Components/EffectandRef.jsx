import React, { useEffect, useRef, useState } from 'react'

export default function EffectandRef() {
    const [text, setText] = useState("");
    const txtRef = useRef();
    useEffect(()=>{
    txtRef.current.innerHTML = text;
});
  return (
    <div>
        <label htmlFor="">Place The Text : </label>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value);}}
        name="" id="" />
        <h1 ref={txtRef}></h1>
    </div>
  )
}











//   useEffect(()=>{
//     dispRef.current.innerHTML = text;
//     dispRef.current.style.background = '#'+Math.random().toString(16).slice(-6);
//     dispRef.current.style.color = '#'+Math.random().toString(16).slice(-6);
