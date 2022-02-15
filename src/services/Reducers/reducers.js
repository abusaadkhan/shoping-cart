import React from "react";
import {addToCart} from '../Actions/actions'
import { ADD_TO_CART, EMPTY_CART } from "../constants";
const initialState = {
    cardData: []
}

export default function cardItems(state=[],action){
   console.log("reducer receiving data in action:" ,action)
    switch (action.type) {
        
        case ADD_TO_CART:
            return[
                ...state,
                {cardData:action.data}
            ]
            
        case EMPTY_CART:
            state.pop();
            return [...state ]    
    
        default:
            return[ ...state]
    }
}