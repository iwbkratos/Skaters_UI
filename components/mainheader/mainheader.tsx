
import { AppBar,Toolbar ,IconButton, Box, Button, Grid} from "@mui/material";
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import Link from "next/link";
import classes from './mainheader.module.css';
import Lobby from "../ui/lobby";
import Categories from "../ui/categories";
import Search from "../ui/searchbox";
import CustomizedBadges from "../ui/shoppingcart";
import SearchBox from "../ui/searchbox";

import { cookies } from 'next/headers'
import AccountMenu from "../ui/dashboard";
import { Allproducts } from "../../util/datafetch";


export default async function MainHeader()
{
   
    
   const data=await Allproducts();
   const token=cookies().get('userData')?.value;
    return(
        <AppBar position="sticky" sx={{ backgroundColor: '#ffff'}}>
            <Toolbar >
                <IconButton size="large" edge="start"   sx={{'&:hover':{backgroundColor:'#ffff'},mr: 2,color:'black'}}> 
                  <Link href={'/'} className={classes.link}><SkateboardingIcon/><span className={classes.lists}>Skaters</span>
                  </Link>
                </IconButton>
                <Box sx={{ display: 'flex', flexGrow: 1, mr:2,justifyContent:"space-evenly"}}>
                    <Lobby/>
                    <Categories/>
                </Box>

                <Box className={classes.menuRight} sx={{ display: 'flex', flexGrow: 1, mr:3}}>
                <SearchBox products={data}/> 
                { <Link className={classes.cartlink} href={`/cart`}><CustomizedBadges/></Link>}
               {!token && <Link href={`/signin`}><Button  sx={{color:'black', transition:'none' ,"&:hover":{backgroundColor:'green'}}} className={classes.Signin}><span>Sign in</span></Button></Link>}
                {token && <AccountMenu/>}
                </Box>
            </Toolbar>
        </AppBar>
     
    )
}

