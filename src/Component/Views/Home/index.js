import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import './style.css'
import product from './product.json'
import { useSelector, useDispatch } from 'react-redux';
import {setProductdata} from '../../../feature/Product/productSlice'

export const Home = () => {
    const dispatch = useDispatch();
    const[productValue,setProductValue]=useState([])
    useEffect(()=>{
        if(productValue.length===0){
            setProductValue(product)
        }
    },[]);
    const handleSubCount = (index) => {
        let pro = [...productValue]
        if(pro[index].count > 1) {
        pro[index].count = pro[index].count -1
        setProductValue(pro)
        }
    }
    const handleAddCount = (index) => {
        let pro = [...productValue]
        pro[index].count = pro[index].count +1
        setProductValue(pro)
    }
    const handleAddcart = (item,index) => {
        let pro = [...productValue]
        pro[index].addToCart = true
        setProductValue(pro)
    }
    let history = useHistory()
    const handleCheckout = () => {

        //*************************************//
        // without redux//
        // history.push({pathname: "/checkout",
        // state: productValue})
        //*************************************//

       dispatch(setProductdata(productValue));
        history.push({pathname: "/checkout",
        state: productValue})
    }
    return (
        <div className="wrapper">
        <p className="heading">OUR PRODUCTS</p>
          {productValue && productValue.length && productValue.map((item,index) => {
              return (
                <div className="product-class" key={index}>
                    <img src={item.image} alt="Avatar" />
                    <p className="product-image">{item.imageName}</p>
                    <p className="product-amount">{item.Amount}</p>
                    <button onClick={() => handleSubCount(index) }>-</button>{item.count}    Add Item   <button onClick={() => handleAddCount(index)}>+</button>
                    <button onClick={() => handleAddcart(item,index)}>Add to card</button>
                </div>
              )
          })}
          <button className="sub-btn" onClick={() => handleCheckout()}>Checkout</button>
      </div>
    )
}

export default Home
