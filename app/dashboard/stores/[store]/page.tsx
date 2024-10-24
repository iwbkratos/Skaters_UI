
import classes from './page.module.css';
import Link from "next/link";
import { Button } from "@mui/material";
import { getStore, StoreProducts } from '../../../../util/datafetch';
import ShowStoreProductGrid from '../../../../components/store/storeProductGrid';
import { DashboardPage } from '../../../../components/dashboard/dashboardlayout';
import StoreTabs from '../../../../components/store/storetabs';
import store from '../../../cart/store';
export default async function StorePage({params}:any)
{  
   const storeId=params.store;
   var storeProducts:any=await StoreProducts(params.store);
   const store =await getStore(storeId);
   const data={storeProducts,store}
    return (
        <>
        <div className={classes.container}>
        <header>
        <div className={classes.headcontainer}>
       <div className={classes.title}>
      <h1>Dashboard</h1>
      <p>Manage your store</p>
       </div>
       
       <div className={classes.storelink}>
        {/* <div><Link href={`/dashboard/${params.store}`}><Button>update store</Button></Link></div> */}
        <div><Link href={`/dashboard/stores/${params.store}/new/${params.store}`}><Button>Add product</Button></Link></div>
        </div>
      
      </div>
        </header>
        <div className={classes.productcontainer}>
        {/* <ShowStoreProductGrid products={storeProducts}/> */}
        <StoreTabs data={data} />
        </div>
        </div>
        </>
    )
}