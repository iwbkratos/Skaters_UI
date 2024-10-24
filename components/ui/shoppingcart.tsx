'use client'
import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartCount } from '../../app/cart/counterAction';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/cart/store';
import { Product } from '../../app/cart/types';
import { createCart, getCartProductsById } from '../../util/datafetch';
import { increment } from '../../app/cart/counterSlice';


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  const cartcount:number=CartCount();
  const dispatch = useDispatch<AppDispatch>();
  const data :Product[] = useSelector((state: RootState) => state.counter.products);
  // const totalAmount :number = useSelector((state: RootState) => state.counter.total);
   
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

 
  
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const cartRecieved= await createCart();
  //     const data= await getCartProductsById(cartRecieved);
  //      data.map((product:Product)=>dispatch(increment(product)))
  //     //  if(token && data.length==0)
  //     //  {
  //     //    setData(data)
  //     //  }
  //   };
  //   if(token&&data.length==0)
  //   {
  //     fetchData();
  //   }
    
  // }, []);
  return (
    <IconButton aria-label="cart"  sx={{ display: 'flex', flexGrow: 1, mr:2,'&:hover':{backgroundColor:'#ffff'},color:'black',border:1,borderRadius:15,borderColor:'#cdcaca'}}>
      <StyledBadge  badgeContent={cartcount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
