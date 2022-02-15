import React from "react";
import image from '../assets/mob.png'
import cartImg from '../assets/cart.png'
const Home = (props) =>{
    //console.log("home props:", props);
    return(
        
        <div>
        
            <div className="add-to-cart" >
                <img src={cartImg} />
                <span className="cart-count" >{props.data.length}</span>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper" >
                <div className="img-wrapper item" >
                    <img src={image} />
                </div>
                <div className="text-wrapper item" >
                   <span>
                    I-Phone
                   </span>
                   <span>
                    Price: $1000.00
                   </span>
                </div>
                <div className="btn-wrapper item" >
                    <button onClick={()=> props.addToCartHandler({
                        price:1000,
                        name:'I Phone 11'
                    })} >Add To Cart</button>
                    
                    <button onClick={()=> props.emptyCartHandler()} >
                        Empty Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home