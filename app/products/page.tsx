import ProductGrid from "../../components/products/products-grid";
import AnchorTemporaryDrawer from "../../components/ui/drawer";
import { getProducts } from "../../util/datafetch";
import classes from './page.module.css'


export  default async function Products(){
       const products:any=await getProducts();
        console.log("length : "+products.length);
       
    return(
        <>
        <div className={classes.title}>
         <h2>
          Products{`(${products.length})`}
         </h2>
          <p >Explore all products from around the world</p>
          <div className={classes.anchor}>
              <AnchorTemporaryDrawer/>
          </div>
         </div>
              <ProductGrid products={products}/>
              </>
        
    )
  
}