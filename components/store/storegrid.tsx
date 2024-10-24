'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Link from 'next/link';
import classes from './storegrid.module.css'
export default function StoreGrid({store}:any) {
  return (

   <>
   <Grid container spacing={4}>
     {store.map((store:any)=>(
      <Grid item key={store.id} xs={12} sm={6} md={4} lg={3} >
    <Link className={classes.path} href={`/dashboard/stores/${store.id}`}>
    <Card sx={{ maxWidth: 345,border:1,borderRadius:5,borderColor:'rgb(218, 218, 218)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2024/08/29/13/35/sunset-9007060_1280.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {store.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {store.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className={classes.addprodbtn}>
        <Button size="small" color="primary">
         Add Product
        </Button>
      </div>
      </CardActions>
    </Card>
    </Link>
    </Grid>
    
       ))}
      </Grid>
    </>
  );
}
