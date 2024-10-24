'use client'
import { Grid } from "@mui/material";
import classes from './cartGrid.module.css'
import Clearbutton from "../ui/clearbutton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/cart/store";
import { Product } from "../../app/cart/types";



export default function CartGrid({products}:any)
{    
    
   
    return (
        <Grid container spacing={2} justifyContent="center">
          
    {products?.length>0 && products?.map((product:any) => (
       <Grid item xs={12} key={product.id}>
        <div  className={classes.list}>
          <img src={product?.imageUrl} alt={product?.name} width={200} height={200}/>
          <div className={classes.content}>
            <div className={classes.contentleft}>
            <h2 className={classes.name}>{product?.name}</h2>
            <p className={classes.price}>Rp {product?.price},00</p>
            </div>
            <div className={classes.contentright}>
                <div className={classes.rightcontent}>
                <h3 className={classes.category}>{product?.category}</h3>
            <div className={classes.clearicon}>
            <Clearbutton product={product}/>              
            </div>
                </div>
           
            </div>
            
   
          </div>
      </div>
        </Grid>
    ))}
     <div className={classes.list}>  {products.length===0 && <h1 className={classes.list}>No items in cart. Explore the products and add now</h1>}
     </div> </Grid>
    );
}