

import Link from 'next/link';
import FloatingActionButtonZoom from '../../../components/cart/cartOrdersFilter';
import { getCartProductsByUser } from '../../../util/datafetch';
import classes from './page.module.css'

export default async function ordersPage()
{
     const data=  await getCartProductsByUser();
     console.log(data)
   
  return(
    <div className={classes.maincontainer}>
      <header>
      <div className={classes.headcontainer}>
      <div className={classes.title}>
      <h1>Orders</h1>
      <p>See Your Transaction History</p>
      </div>
      </div>
    </header>
    <main className={classes.main}>
      <div className={classes.container}>
        <FloatingActionButtonZoom data={data}/>
      </div>
    </main>
    </div>
  );
}