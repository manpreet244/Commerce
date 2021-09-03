import React from 'react'
import { useDispatchCart } from './Cart';
const Card = ({ img, title, price, product }) => {
    const dispatch = useDispatchCart();
    const addToCart = (item) => {
        console.log(item);
        dispatch({type : 'ADD' ,item})
    }
    return (
        <div className="">
        <div className="  flex flex-col px-5 flex-wrap py-2 border-2 border-purple-200 bg-gray-200 rounded-sm" >
  
            <div>
                
                <img src={img} className="w-40 h-40  " />
                </div>
            <div><h4 className="pl-4  pt-2 text-lg font-bold text-blue-800">{title.slice(0,14)}</h4></div>
       
            <div className="text-gray-800 pl-9 text-sm "><span>Price : </span>{price}</div>
        <div className="pl-10 border-purple-200 border-2 text-gray-600"><button onClick={() =>addToCart(product)}>Add to Cart</button></div>
        </div>
        </div>
    );
}

export default Card;
 