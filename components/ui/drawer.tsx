'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import classes from './drawer.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const path=usePathname();
  const [name,setName]=React.useState<string>('');
  
  React.useEffect(()=>{
     if(path.includes('skateboards'))
     {
        setName('skateboards');
     }
     else if(path.includes('shoes'))
     {
        setName('shoes')
     }
     else if(path.includes('clothing'))
      {
         setName('clothing')
      }
      else if(path.includes('accessories'))
        {
           setName('accessories')
        }
  },[path]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'right' || anchor === 'bottom' ? 380 : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem sx={{paddingLeft:5}}>
            <Typography sx={{color:'#1c936d',fontFamily:`'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,fontSize:25}}>
                Category
            </Typography>
          </ListItem>
      </List>
      <Divider />
      <List>
          <div className={classes.grid}>
            <div className={classes.top}>
                <div><Link className={name=='skateboards'?classes.active:classes.link} href={`/products/skateboards`}><Button type='button' >Skatebord</Button></Link></div>
                <div><Link className={name=='shoes'?classes.active:classes.link} href={`/products/shoes`}><Button type='button' >Shoes</Button></Link></div>
            </div>
            <div className={classes.bottom}>
                <div><Link className={name=='clothing'?classes.active:classes.link} href={`/products/clothing`}><Button type='button' >Clothing</Button></Link></div>
                <div><Link className={name=='accessories'?classes.active:classes.link} href={`/products/accessories`}><Button type='button' >Accessories</Button></Link></div>
            </div>
          </div>
      </List>
    </Box>
  );
  
  

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Filter +</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
