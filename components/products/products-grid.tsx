import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Icon, IconButton } from '@mui/material';
import classes from './product-grid.module.css'
import BasicRating from '../ui/rating';

import Link from 'next/link';
import ShoppingCartIcon from '../ui/shoppingcartIcon';
import { green } from '@mui/material/colors';





async function  ProductGrid ({products}:any) {

      const data:any =  products;
      if(!data)
        {
          return<p>Something went wrong</p>
        }
      //   let allproducts:Product[]=[];
        
      //  data.map((product:Product)=>allproducts.push(new Product(product.name,product.categoryId,product.description,product.images)));
         
      //  console.log(allproducts[0].categoryId);
      //  putAllProducts(allproducts);
    // const products =await Allproducts();
  return (
    
    <Grid container spacing={4}>
      {data.map((product :any) => (
       
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
          <Link href={`/products/${product.category}/${product.id}`} className={classes.link}>
          <Card className={classes.card} sx={ {height:430,paddingRight:2,paddingLeft:2,paddingTop:2,borderRadius:5,}}>
            <CardMedia
              component="img"
              height="270"
              image={product.imageUrl}
              alt={product.name}
              sx={{borderRadius:5}}
            />
            <CardContent className={classes.content}>
            <Typography variant="body2" component='h3' color="text.secondary">
                 {product.category}
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                    {product.name}
              </Typography>
              <BasicRating/>
              <div className={classes.price}>
               <Typography variant="h6" component="h6" color={'green'}>
                 Rp {product.price},00
              </Typography>
              <CardActions>
               
              <div className={classes.cart}><ShoppingCartIcon product={product}/></div> 
             
            </CardActions>
            </div>
            </CardContent>
            
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;