'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';
import { deleteProduct } from '../../util/datafetch';
import { useRouter } from 'next/navigation';


export default function Actions({product}:any) {
   const id:string=product.id;
   const router=useRouter();
  async function  handleDelete()
  {
      await  deleteProduct(id);
       router.push('/dashboard/stores')
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
        <Link href={`/dashboard/stores/${product.storeId}/${product.id}`} ><Button>update</Button></Link>
        </div>
        <div>
         <Link href={`/products/${product.category}/${product.id}`}><Button>detail</Button></Link>
         </div>
         <div>
         < Button onClick={handleDelete}>delete</Button>
         </div>
         </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
