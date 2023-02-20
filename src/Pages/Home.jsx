import React from 'react'
import CollapsibleExample from '../Component/Appbar'; 
import Banner from "../Component/Banner";
import HomeCard from '../Component/HomeCard';
import {Link} from 'react-router-dom'
import { FaUser} from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { VscSearch,VscCircleLargeFilled } from "react-icons/vsc";
import { GrFacebook,GrGoogle,GrGithub,GrHpi,GrInstagram,GrLinkedin} from "react-icons/gr";

import { BiCart } from "react-icons/bi";
import { useState,useEffect } from 'react'


const Home = () => {
  const [homecard1,setHomecard1]=useState("")

 useEffect(()=>{
 fetch('https://backend-mongo-eco.vercel.app/home')
 .then(res=>res.json())
 .then(json=>{console.log(json);setHomecard1(json)})
 
 .catch((error)=>console.log("error"))
},[])
  return (
    <>
    <div className='top-bar'>
    <span className='icon1'> <FaUser className='user'/> <span className='icon-name'>My Profile</span></span>
    <span className='icon2'><AiOutlineHome className='home1'/><span className='icon-name1'>2 item $998</span></span>
     <span><VscSearch className='serch'/></span>
     <Link to="/cart"><span className='crt'><BiCart/><span></span>cart</span></Link>
     </div>

    <CollapsibleExample/>
   
    <div className='Top1'>
        <div className="table">
          <h4>Accesories</h4>
      <p> Apple Car &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 2</p>
      <p> Air port & wireless &nbsp; &nbsp; 48</p>
      <p> Cables & Docks &nbsp; &nbsp;&nbsp; &nbsp; 14</p>
      <p> Cases & Films &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 4</p>
      <p> Charging Devices &nbsp; &nbsp;&nbsp; 3</p>
      <p> Connected home &nbsp; &nbsp; 22</p>
    </div>
    <Banner/>
    </div>
    <div className='big'>
    <div className='side-Box'>
<div className='range-box'>
<h5>PRICES</h5>
<form >
<label for="vol">Range ( $13.99 and $25.99):</label><br/><br/>
<input type="range" id="vol" name="vol" min="0" max="10"/>
</form>

</div>
<div className='color-box'>
<h5>COLOR</h5>
<VscCircleLargeFilled className='c-1'/><VscCircleLargeFilled className='c-2'/><VscCircleLargeFilled className='c-3'/><VscCircleLargeFilled className='c-4'/><VscCircleLargeFilled className='c-5'/>
</div>
<div className="table-box">
     <h5 headBox>BRAND</h5><br/>
 <p> Apple &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 2</p>
 <p> LG &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 48</p>
 <p> Samsung &nbsp; 14</p>
 <p> Siemen &nbsp; &nbsp;&nbsp; &nbsp;4</p>
</div> 

</div>

    <div className="H-Card">
    {
      homecard1 && homecard1.map((item)=>{
        return(
          <HomeCard imgsrc={item.imgsrc} Name={item.Name} price={item.price} oldprice={item.oldprice}/>
        )
      })
    }
    </div>
    </div> 
    <div className='footer'>
      <div className='f-1'> 
      <h4 className='h4'>MY ACCOUNT</h4>
      <br/>
     <p className='p'>Phone +(0)000 00000 001</p>
     <p className='p'>Email:rohan@gmail.com</p>
     <p className='p'>at-saroli1234 Street Name City,AA 09999</p>
     </div>
     <div className='f-2'>
     <h4 className='h4'>RECENT NEWS</h4>
     <br/>
     <p className='p'>About Us</p>
     <p className='p'>Services</p>
     <p className='p'>Get In Touch</p>
     <span className='bottom'> <GrFacebook className='ic'/><GrGoogle className='ic'/><GrHpi className='ic'/> <GrGithub className='ic'/><GrInstagram className='ic'/><GrLinkedin className='ic'/></span>
     </div>
     <div className='f-3'>
     <h4 className='h4'>LINKS</h4>
     <br/>
     <p className='p'>wbsite Builder</p>
     <p className='p'> Download for Mac</p>
     <p className='p'>Download for Window</p>
     </div>
     <div className='f-4'>
     <h4 className='h4'>BUYING & SELLING</h4>
     <br/>
     <p className='p'>APMXE BLOG</p>
     <p className='p'> sell gold</p>
     <p className='p'>coin value</p>
     <p className='p'>storage</p>
     </div>
     </div>
     
     
    
    </>
  )
}

export default Home