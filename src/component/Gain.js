import React,{useEffect, useState} from 'react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.webp"
import List from './List';

export default function Gain() {
  const [info, setInfo] = useState([]);
  const [count, setCount] = useState(50);

  const addMore = () => {
    setCount(count+50);
  }
  
const fetchData = () => {
    fetch("https://supermind-staging.vercel.app/api/test/listing")
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      const crpto = data;
      setInfo(crpto)
    })
}
useEffect(()=>{
  fetchData();
},[])
  
  return (
    <div className='container'>
      { 
        info.slice(0,count).map((item,key) =>(
      
            (item.dayChange>0)? <List item={item} key = {key}/>:""
          
        )
        )
      }
      <div className='text-center m-5'>
      <button className='btn btn-primary w-50' onClick={addMore}>Load More.
      </button>
      </div>
    </div>
  )
}

