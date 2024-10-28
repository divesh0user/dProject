import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [view,setView] = useState([]);

  useEffect(()=>{
    axios.get(url)
    .then((res)=>{
        setView(res.data)
    })
    .catch(err=>{console.log(err);
    })
  })

  return view
}
