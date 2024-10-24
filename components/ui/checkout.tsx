'use client'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Cancel } from '@mui/icons-material';
import classes from './checkout.module.css'
import { addCartProducts, createCart, updateCart } from '../../util/datafetch';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/cart/store';
import { notFound, useRouter } from 'next/navigation';
import { Product } from '../../app/cart/types';
import { clear } from '../../app/cart/counterSlice';





const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  
export default  function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const [cart,setCart]=React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router=useRouter();
  const amnt :number = useSelector((state: RootState) => state.counter.total);
  const data :Product[] = useSelector((state: RootState) => state.counter.products);
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

  

   function  handleCartCancel()
  { 
      handleClose();  
  }
  async function  handleCartPaid()
  {
      const cartRecieved= await createCart();
      setCart(cartRecieved);
      console.log(cartRecieved)
     const res=  await updateCart(cartRecieved,"paid",amnt);
     //  await addCartProducts(products,cartRecieved.id);
     if(res)
     {
      handleClose();
      router.push('/dashboard/orders');
      dispatch(clear())
    
     }
     else
     {
      notFound();
     }
  }
  async function  handleCartPending()
  {
      
      const cartRecieved= await createCart();
      setCart(cartRecieved);
      console.log(cartRecieved)
     const res= await updateCart(cartRecieved,"pending",amnt);
     //  await addCartProducts(products,cartRecieved.id);
     if(res)
      {
       handleClose();
       router.push('/dashboard/orders');
       dispatch(clear())
       
      }
      else
      {
       notFound();
      }
  }

  
  async function goto()
  {
    
    router.push('/signin');
  }

  return (
    <>
     <div className={classes.container}>
     {token && <Button className={classes.checkout} onClick={handleOpen}>Checkout </Button>}
      {!token && <Button className={classes.checkout} onClick={goto}>Checkout </Button>}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className={classes.header}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Payment
            </Typography>
            <div className={classes.cancel}>
            <Button onClick={handleCartCancel}> <Cancel/></Button>
            </div>
            
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Debit/Credit Card
            </Typography>
            <div>
              <Button onClick={handleCartPaid} >Pay</Button>
              <Button onClick={handleCartPending}>Cancel</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
    
    </>
  );
}
