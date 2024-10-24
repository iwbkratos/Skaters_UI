

import Link from "next/link";
import classes from './page.module.css'
import { showStore } from "../../../util/datafetch";
import StoreGrid from "../../../components/store/storegrid";

export default async function storesPage()
{
   const store:any=await showStore();
   console.log(store);

   return (
    <>
    <div className={classes.maincontainer}>
    <header>
      <div className={classes.headcontainer}>
       <div className={classes.title}>
      <h1>Stores</h1>
      <p>Manage your store</p>

       </div>
       <div className={classes.storelink}><Link href={`/dashboard/stores/new`}><button>Create Srore</button></Link></div>
      </div>
    </header>
    <main className={classes.main}>
      <div className={classes.container}>
        <StoreGrid store={store}/>
      </div>
    </main>
    </div>
    </>
   );
} 