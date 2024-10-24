import React from 'react';
import classes from './space-grid.module.css'
import { Grid, Box, Paper } from '@mui/material';
import Link from 'next/link';

function SpaceGrid () {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={3} >
        <Link href={`/products/skateboards`} className={classes.link}>

          <Paper className={classes.grid} sx={{  padding: 2,height:110,borderRadius:2 }}>
            
            <svg xmlns="http://www.w3.org/2000/svg"
            width="32" height="32"
             viewBox="0 0 24 24" strokeWidth="1.5" 
             stroke="currentColor" fill="none" 
             strokeLinecap="round" 
             strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="7" cy="15" r="2"/>
              <circle cx="17" cy="15" r="2"/>
              <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1"/>
            </svg>
              
                
                  <h2 >Skateboards</h2>
                  <p>3 products</p>
               
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={4} sm={3}>
        <Link href={`/products/clothing`} className={classes.link}>
        <Paper className={classes.grid} sx={{  padding: 2,height:110,borderRadius:2 }}>
            
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32" height="32"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
  <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
  <path d="M16 17h4" />
  <path d="M4 13h4" />
</svg>
       
                
                  <h2 >Clothing</h2>
                  <p>3 products</p>
              
          </Paper>
          </Link>
       </Grid>
        <Grid  item xs={4} sm={3}>
        <Link href={`/products/shoes`} className={classes.link}>

        <Paper className={classes.grid} sx={{ padding: 2,height:110,borderRadius:2 }}>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32" height="32"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
</svg>
          
               
                  <h2 >Shoes</h2>
                  <p>1 products</p>
           
          </Paper>
          </Link>
        </Grid>
        <Grid  item xs={4} sm={3}>
          <Link href={`/products/accessories`} className={classes.link}>
        <Paper className={classes.grid} sx={{  padding: 2,height:110,borderRadius:2 }}>

      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>

      <h2 >Accessories</h2>
      <p>1 products</p>

          </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpaceGrid;
 