import React from 'react'
import {Link} from "react-router-dom"
import { BsArrowDown,BsArrowUp,BsFillCursorFill } from 'react-icons/bs';
export default function Home() {
  return (
    <div className='container'>
      <div className='cate text-center'><h1 className='p-3 text-white'>Crypto Market</h1></div>
      <div className="text-center p-3 ">
        <Link to="/" className='btn btn-light m-2 border-primary text-primary'>All Stocks <BsFillCursorFill color='blue'/></Link>
        <Link to="/gain" className='btn btn-light m-2 border-success text-success'>Gain <BsArrowUp color='green'/></Link>
        <Link to="/loss" className='btn btn-light m-2 border-danger text-danger'>Loss <BsArrowDown color='red'/></Link>
      </div>
    </div>
  )
}
