'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { updateCart } from '../../util/datafetch';


export default function CartActions({data}:any) {
    const router=useRouter();
       const cart=data;
       console.log("---------------------------"+cart)   
  async function  handleCartCancel()
  {
      
      console.log("cart id :   =================> "+cart)
      await updateCart(cart?.cartId,"canceled",cart?.amnt);
   
      
  }

  async function  handleCartPaid()
  {  
      console.log("cart id :   =================> "+cart)
      await updateCart(cart?.cartId,"paid",cart?.amnt);  
     
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          
           <MoreHorizIcon  {...bindTrigger(popupState)}/>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div>
          <div>    
      {cart?.status=="pending" && <Button onClick={handleCartPaid}>Pay</Button>}
        </div>
        <div>
         <Link href={`/dashboard/orders/${cart?.cartId}`}><Button>Detail</Button></Link>
         </div>
         <div>
      { cart?.status=="pending" &&  < Button onClick={handleCartCancel}>Cancel</Button>}
         </div>
         </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
