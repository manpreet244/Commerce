import React from "react";
import { useCart, useDispatchCart } from "../components/Cart";

const CartItem = ({ product, index, handleRemoveItem }) => {
    return (
        
<div className=" border-red-600 flex flex-col w-1/2" >
  
<div className="">
        <div className="  flex flex-col px-3  py-2 border-2 border-purple-200 bg-gray-200 rounded-sm" >
  
            <div>
                
                <img src={product.image} className="w-48 h-48 mx-3   " />
                </div>
            <div><h4 className="pl-4  pt-2 text-lg font-bold text-blue-800 ">{product.title.slice(0,19)}</h4></div>
       
            <div className="text-gray-800 pl-9 text-sm "><span>Price : </span>{product.price}</div>
        <div className="pl-10 border-purple-200 border-2 text-gray-600">  <button onClick={() => handleRemoveItem(index)}>Remove from cart</button></div>
        </div>
        </div>

        



    </div> 
    );
};
        
export default function Store() {
    const items = useCart();
    const dispatch = useDispatchCart();
    // const totalPrice = items.reduce((total, b) =>( total + b.price, 0));

    const handleRemoveItem = (index) => {
      
      dispatch({ type: "REMOVE", index });
    };
  
    if (items.length === 0) {
      return (
        <main>
          <p>Cart is empty</p>
        </main>
      );
    }
    return (
      <main>
       
        {items.map((item, index) => (
          <CartItem
            handleRemoveItem={handleRemoveItem}
            key={index}
            product={item}
            index={index}
          />
        ))}
      </main>
    );
  }
  