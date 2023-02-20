import React, { useState } from 'react'
import { VscStarFull } from "react-icons/vsc";
import { cartdata } from './data';


const HomeCard = (props) => {
  const [imgsrc,setImgsrc]=useState("")
  const [Name,setName]=useState("")
  const [price,setPrice]=useState("")
  const [oldprice,setOldprice]=useState("")
  

  const addCard=()=>{
    const addlist=cartdata;
    addlist.push({
      imgsrc:imgsrc,
      Name:Name,
      price:price,
      oldprice:oldprice
      
    })
    console.log(addlist)
    console.log(cartdata)
   
  }
  return (
    <div className='Comp-Home'>
    <img width="220px" height="160px" src={props.imgsrc} alt=""/>
      <h4 className='img-Name'>{props.Name}</h4>
      <span className='value-price'>{props.price}</span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='oldvalue-price'>{props.oldprice}</span>
      <div className='star'><VscStarFull/><VscStarFull/><VscStarFull/><VscStarFull/><VscStarFull className='star5'/></div>
   <button  onMouseOver={()=>{
  setImgsrc(props.imgsrc);
  setName(props.Name);
  setPrice(props.price);
  setOldprice(props.oldprice);
 }} onClick={()=>{
addCard()}}
 className="buttn">add to card</button>
      
  </div>
  )
}

export default HomeCard