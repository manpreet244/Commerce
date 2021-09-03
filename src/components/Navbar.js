import React from 'react'
import styles from './Fonts.module.css';

import { NavLink } from 'react-router-dom';
import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { useCart } from './Cart';
const Navbar = () => {
    const item = useCart();
   
    return (
   
        <div className={styles.body}>
  
            <div  className="p-0 m-0  bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500  flex flex-row flex-wrap items-center justify-center">
                <ul className="py-2">
                 
                    
                    <li className="inline px-2 text-xl text-gray-200  font-bold">
                        <NavLink to="/">Home</NavLink>
                    </li>
                
                    <li className="inline px-7  text-xl text-gray-200 font-bold ">
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
           
                    <li className="inline">
                        <NavLink to='/cart'>
               
                            <AddShoppingCartIcon className=" styles.parent text-gray-200 " />
                            <label className=" styles.label text-sm text-gray-200"><b>{item.length}</b>
                     </label>   </NavLink>
                    </li>
                 
     
                </ul>
               
            </div>
            <div className=" text-blue-600  text-xl px-3 bg-gray-200 ">
                      <LoginButton  /></div>
            <div className=" text-blue-600  text-xl px-3 bg-gray-200"><LogoutButton /></div>
                   
        </div>
          )
}

export default Navbar
