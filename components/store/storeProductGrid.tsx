import Actions from "../ui/productAction";
import classes from "./storeProductGrid.module.css"
export default function ShowStoreProductGrid({products}:any)
{   
    return (
        <>
        
        <main className={classes.main}>
            <section className={classes.products}>
                <table >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>CreatedAt</th>
                    </tr>
                    </thead>
                    {products.map((product:any)=>(
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.createdAt}</td>
                        <td><Actions product={product}/></td>
                    </tr>
                    ))}
                </table>
            </section>
        </main>
        </>
    );
}