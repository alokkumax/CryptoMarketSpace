import React,{useEffect, useState} from 'react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.webp"
import List from './List';
import { BsArrowDown,BsArrowUp,BsFillCursorFill } from 'react-icons/bs';
import {Link} from "react-router-dom"


export default function Loss() {
  const [info, setInfo] = useState([]);
  const [count, setCount] = useState(20);

  const addMore = () => {
    setCount(count+20);
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
      <div className="text-center p-3 ">
        <Link to="/" className='btn btn-light m-2 border-primary text-primary'>All Stocks <BsFillCursorFill color='blue'/></Link>
        <Link to="/gain" className='btn btn-light m-2 border-success text-success'>Gain <BsArrowUp color='green'/></Link>
        <Link to="/loss" className='btn btn-light m-2 border-danger text-danger'>Loss <BsArrowDown color='red'/></Link>
      </div>
      { 
        info.slice(0,count).map((item,key) =>(
      
            (item.dayChange<0)? <List item={item} key = {key}/>:""
          
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

