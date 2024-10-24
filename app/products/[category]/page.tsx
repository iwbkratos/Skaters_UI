
import ProductGrid from '../../../components/products/products-grid';
import AnchorTemporaryDrawer from '../../../components/ui/drawer';
import { FilterProducts } from '../../../util/datafetch';
import classes from './page.module.css'

export default async function ProductDetails({params}:any)
{      const category:string=params.category;
       const products : any= await FilterProducts(category);
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