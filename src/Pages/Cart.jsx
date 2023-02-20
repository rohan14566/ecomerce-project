import React from 'react'
import { cartdata } from '../Component/data'
import CollapsibleExample from '../Component/Appbar'; 
const Cart = () => {
  return (
    <div>
      <CollapsibleExample/>
       <div className='insert-title'><span>Product</span><span>Name</span><span>Quntity</span><span>Price</span></div>
    {

         cartdata && cartdata.map((item)=>{
            return(
                <>
                <div className='insert-page'><img style={{width:"200px",height:"150px"}} src={item.imgsrc} alt=""/>   <span  className="insert-name">{item.Name}</span><span className="insert-Q">1 Q</span> <span className="insert-price">{item.price}</span></div><hr className='hr'/>
                
                </>
        
            )
        })
    }
    </div>
  )
}

export default Cart