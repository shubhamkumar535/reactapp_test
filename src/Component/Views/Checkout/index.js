import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import {selectProductValue} from '../../../feature/Product/productSelector'
export const Checkout = (props) => {
    const[checkoutData,setcheckoutData]=useState([])
    //******************************************************************************/
    /////////without redux\\\\\\\\\

    // useEffect(()=>{
    //     if(props.location.state && props.location.state.length){
    //        let result = props.location.state.filter(item => item.addToCart == true);
    //         setcheckoutData(result)
    //         console.log("newwwwwwww",checkoutData && checkoutData)
    //     }
    // },[]);
    
    const getcheckoutdata = useSelector(selectProductValue);
    console.log("77777777",getcheckoutdata)
     useEffect(()=>{
        if(getcheckoutdata && getcheckoutdata.length){
           let result = getcheckoutdata.filter(item => item.addToCart == true);
            setcheckoutData(result)
        }
    },[]);
    const handleAmount = arr => {
        let totalAmount = 0
        arr.map(item => {
            totalAmount = totalAmount + (item.Amount * item.count)

        })
        return totalAmount
    }
   console.log("checkkkkkkkk",checkoutData)
    return (
        <div className="wrapper">
            <p>Checkout Product</p>
            {checkoutData && checkoutData.length && checkoutData.map((item,index) => {
                console.log("item",item)
             return (
                <div className="product-class" >
                    <img src={item.image} alt="Avatar" />
                    <p className="product-image">{item.imageName}</p>
                    <p className="product-amount">Amount {item.Amount}</p>
                    <p className="product-amount"> Count: {item.count}</p>
                </div>
             )
            })}
            <p>Total Amount: {handleAmount(checkoutData)}</p>
        </div>
    )
}

export default Checkout
