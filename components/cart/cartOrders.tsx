
import { Grid } from '@mui/material'
import classes from './cartOrders.module.css'

import CartOrdersGrid from './cartOrdersGrid';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CartActions from '../ui/cartAction';
import ColorChips from '../ui/statuschip';
export default  function CartOrders({data}:any)
{
   const carts=data;
   return (
      <Grid container spacing={1} justifyContent="center">
 
 {carts.map((cart :any) => (
         
      <Grid item xs={12} >
     <div className={classes.container}>
        <div className={classes.header}>
       
         <header>
            <span>Shopping</span>
            <span className={classes.status}><ColorChips status={cart?.status}/></span>    
            <span className={classes.actions}><CartActions data={cart}/></span>   
         </header>
         
       </div>
       <div className={classes.grid}>
          <CartOrdersGrid products={cart?.products}/>
       </div>
       <div className={classes.footer}>
         <h2>Total:</h2><span className={classes.amnt}>{cart?.total}</span>
       </div>
     </div>
     </Grid>
))}
     </Grid>
   )
}