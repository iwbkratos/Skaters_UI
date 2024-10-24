'use client'
import classes from './page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/cart/store';
import { Product } from './types';
import React, { useEffect, useState } from 'react';
import { increment } from './counterSlice';
import { createCart, getCartProductsById } from '../../util/datafetch';
import CartGrid from '../../components/cart/cartGrid';
import TransitionsModal from '../../components/ui/checkout';


export  default  function Cart(){
 
  const [cartId, setCartId] = React.useState<any>();
  const [isClicked,setIsClicked]=useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const data :Product[] = useSelector((state: RootState) => state.counter.products);
  const totalAmount :number = useSelector((state: RootState) => state.counter.total);
   
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

 
  
  React.useEffect(() => {
    const fetchData = async () => {
      const cartRecieved= await createCart();
      setCartId(cartRecieved);
      const data= await getCartProductsById(cartRecieved);
       data.map((product:Product)=>dispatch(increment(product)))
      //  if(token && data.length==0)
      //  {
      //    setData(data)
      //  }
    };
    if(token&&data.length==0)
    {
      fetchData();
    }
    
  }, []);
  
    return (
     <>
     {data&&<main className={classes.main}>
            <section className={classes.left}>
               <div className={classes.title}>
                <h1>Shopping Cart</h1>
               </div>
               <article className={classes.gridcontainer}>
               <div className={classes.grid}>
                 <CartGrid products={data}/>
               </div>
               </article>
            </section>
            <section className={classes.right}>
                <article>
               <div className={classes.ordersummary}>
                    <h1>Order Summary</h1>
                    <div className={classes.total}>
                        <div>Order total</div> 
                        <h3>Rp {totalAmount}.00</h3>
                    </div>
                  <div className={classes.checkout}>
                    {data.length>0&&<TransitionsModal />}
                  </div>
                  </div>  
               </article>
            </section>
        </main>}
       {!data&&<h2>no items in cart</h2>}
        </>
    )
}