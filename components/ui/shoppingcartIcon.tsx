'use client'
import { Button } from "@mui/material"
import Icon from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/cart/store';
import { increment, decrement } from '../../app/cart/counterSlice';
import classes from './shoppingcartIcon.module.css'

import { addCartProduct, createCart } from "../../util/datafetch";
import FilledAlerts from "./alert";

export default function ShoppingCartIcon({product}:any)
{
     <FilledAlerts/>
     async function handleCartProduct()
    {   
        const cart=await createCart();
        const res=  await addCartProduct(product,cart);
        console.log("cart id: "+ cart);
       
    }
    function getCookie(name:string) {
        let cookiesArray = document.cookie.split('; ');
        for (let cookie of cookiesArray) {
            let [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null; // Return null if the cookie is not found
    }
    
    // Usage
    const token = getCookie('userData');
    console.log(token);
     const id:string=product.id;
     const name:string=product.name;
     const description:string=product.description;
     const image:string=product.imagesUrl
     const price:number=product.price;
     const category:string=product.category;
    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    return(
        <>
       {!token &&  <button className={classes.button} onClick={event=>{event.stopPropagation(),event.preventDefault(),dispatch(increment({id,name,description,image,price,category})); }}><span><ShoppingCartOutlinedIcon/></span></button>}
        {token && <button className={classes.button} onClick={event=>{event.stopPropagation(),event.preventDefault(),dispatch(increment({id,name,description,image,price,category}));handleCartProduct() }}> <span><ShoppingCartOutlinedIcon/></span></button>}
         </>
    );
}