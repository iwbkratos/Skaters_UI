import Link from 'next/link';
import classes from './dashboardlayout.module.css'
import { Button } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
export function DashboardPage()
{
    return(
       <>
        <div className={classes.dashboardcontainer}>
       <div className={classes.dashboard}>
          <div className={classes.paths}>
            <div className={classes.btn}> 
            <Link href={`/dashboard/orders`}>          
            <Button>
              <span><LocalMallOutlinedIcon></LocalMallOutlinedIcon></span> Orders
            </Button>
            </Link>
           </div>
              
           <div className={classes.btn}>
           <Link href={`/dashboard/stores`}>
            <Button>
             <span><StorefrontOutlinedIcon/></span>  Stores
            </Button>
            </Link>
           </div>
          </div>
       </div>
    </div>
    </>
    );
}