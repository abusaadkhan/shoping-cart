import React from "react";
import {ADD_TO_CART,EMPTY_CART} from '../constants'

export const addToCart = (data) => {
   // console.log("action, addtocart data:",data)
    return {
        
        type:ADD_TO_CART,
        data
    }
}

export const emptyCart = () => {
    console.log("action, empty data:")
    return {
        
        type:EMPTY_CART,
    
    }
}