import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.webp"

export default function List(props) {
  return (
    <Link to="/graph" className="d-flex text-muted pt-3 ">
            <img src={`${props.key%3===0?img1:props.key%3===1?img2:img3}`} height="35px" width="35px" className='mx-2'/>

            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              
              <div className="d-flex justify-content-between">
                <span className="text-gray-dark name">{props.item.name}</span>
                <span className='price'>{props.item.price}</span>
              </div>

              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark fullName">{props.item.fullName}</strong>
                <span className={`${props.item.dayChange>0?"text-success priceC":"text-danger priceC"}`}
                >{props.item.dayChange} %</span>
              </div>
            </div>

          </Link>
  )
}
