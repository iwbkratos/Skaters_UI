import { Grid } from "@mui/material";
import classes from './cartGrid.module.css'

export default function CartOrdersGrid({products}:any)
{    
    console.log(products)
   // const dispatch=useDispatch<AppDispatch>(); 
    return (
        <Grid container spacing={2} justifyContent="center">
          
    {products?.length>0 && products.map((product:any) => (
       <Grid item xs={11.5} key={product.id}>
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
                </div>
            </div>   
          </div>
      </div>
        </Grid>
    ))}
     {products.length===0 && <div className={classes.list}>  <h1 className={classes.list}>No items in cart. Explore the products and add now</h1>
     </div>}
      </Grid>
    );
}
