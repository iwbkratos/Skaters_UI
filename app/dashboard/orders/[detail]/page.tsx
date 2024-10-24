import { getCartProductsByCartId } from '../../../../util/datafetch';
import classes from './page.module.css'

export default async function OrderDetailPage({params}:any)
{
     const id:string=params.detail;
     const carts:any=  await getCartProductsByCartId(id);
     console.log(carts);
      
    return(
        <>
        <div className={classes.container}>
         <header className={classes.head}>
           <h1>Detail payment</h1>
         </header>
         <div className={classes.order}>
            <div className={classes.ordercontent}>
              <h3>OrderId: </h3><p>{carts?.cartId}</p>
            </div>
            <div className={classes.ordercontent}>
            <h3>OrderDate: </h3><p>{carts?.date}</p>
            </div>
         </div>

          <div className={classes.head2}>
            <h1>
               Purchased Products
            </h1>
          </div>
          <div className={classes.table}>
          <table >
             <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Store Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    {carts?.products?.map((product:any)=>(
                    <tr>
                        <td>{product?.name}</td>
                        <td>{product?.storename}</td>
                        <td>{product?.quantity}</td>
                        <td>{product?.price}</td>
                        
                    </tr>
                    ))}
          </table>
          </div>
            <footer className={classes.foot}>
              <div className={classes.total}>
                <h2>Total:</h2>
            </div>
            <div className={classes.amount}><p>Rp.{carts?.total},00</p></div>
             
            </footer>
            </div>
        </>
    );

}