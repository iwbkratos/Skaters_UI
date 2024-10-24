import ProductForm from "../../../../../action/productform";
import { getProductById } from "../../../../../util/datafetch";


export default async function UpdateProductPage({params}:any)
{
     const product:any=await getProductById(params.id);
     return(
     <ProductForm product={product}/>
     );
}