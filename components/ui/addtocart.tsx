
'use client'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/cart/store';
import { increment, decrement } from '../../app/cart/counterSlice';
import classes from './addtocart.module.css'
import { cookies } from 'next/headers';
import { Button } from '@mui/material';
import { addCartProduct, createCart } from '../../util/datafetch';

export default function AddtoCart({product}:any)
{
    async function handleCartProduct()
    {   
         const cart=await createCart();
        const res=  await addCartProduct(product,cart);
        console.log(res);
    }
    
    
    const id:string=product.id;
    const name:string=product.name;
    const description:string=product.description;
    const image:string=product.imagesUrl;
    const price:number=product.price;
    const category:string=product.category;
   const value = useSelector((state: RootState) => state.counter.value);
   const dispatch = useDispatch<AppDispatch>();
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
    return (
        <>
     {!token &&  <Button className={classes.button} onClick={event=>{event.stopPropagation(),event.preventDefault(),dispatch(increment({id,name,description,image,price,category})); }}>Add To Cart <span><ShoppingCartOutlinedIcon/></span></Button>}
        {token && <button className={classes.button} onClick={event=>{event.stopPropagation(),event.preventDefault(),dispatch(increment({id,name,description,image,price,category})); handleCartProduct() }}>Add To Cart <span><ShoppingCartOutlinedIcon/></span></button>}
     </>
    )
}