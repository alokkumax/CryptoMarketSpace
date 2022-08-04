import React,{useEffect, useState} from 'react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.webp"
import List from './List';
import {Link} from "react-router-dom"
import { BsArrowDown,BsArrowUp,BsFillCursorFill } from 'react-icons/bs';

export default function All() {
  const [info, setInfo] = useState([]);
  const [count, setCount] = useState(10);


  const addMore = () => {
    setCount(count+10);
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
        info.slice(0,count).map((item,index) => (
          <List item={item} key={index}/>
        
        ))
      }
      <div className='text-center m-5'>
      <button className='btn btn-primary w-50' onClick={addMore}>Show More...
      </button>
      </div>
    
    </div>
  )
}
