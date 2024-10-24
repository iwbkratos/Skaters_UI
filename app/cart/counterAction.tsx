'use client'

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';



export function CartCount(){
       const CartItemCount :number = useSelector((state: RootState) => state.counter.value);
   return CartItemCount;
}
export const ReduxProduct = () => {
   const products = useSelector((state: RootState) => state.counter.products);
 return products;
 }
 export function Total(){
  const total :number = useSelector((state: RootState) => state.counter.total);
  return CartCount;
 }
 export function isActiveState()
 {
   const isActive= useSelector((state: RootState) => state.counter.isActive);
   return isActive;
 }

 export function isActiveTrue()
 {
    useSelector((state: RootState) => state.counter.isActive=true);
 }

 export function isActiveFalse()
 {
    useSelector((state: RootState) => state.counter.isActive=false);
 }


 

function selector()
{
    const dispatch = useDispatch<AppDispatch>();
  return dispatch;
}
export default selector;
