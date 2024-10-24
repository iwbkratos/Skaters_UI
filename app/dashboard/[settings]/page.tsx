'use client'
import classes from './page.module.css'
import { Button } from '@mui/material';
import { useState } from 'react';
import { deleteStore, getStore, updateStore } from '../../../util/datafetch';
import { useRouter } from 'next/navigation';

export  default async function UpdateStorePage({params}:any)
{
  const router=useRouter();

    console.log(params.settings);
    const store =await getStore(params.settings);
  
  async function handleDelete()
  {
    const store= await deleteStore(params.settings);
    console.log(store);
    router.push(`/dashboard/stores`);
  }
  async function update(formData:any)
  {
    const res= await updateStore(formData);
     router.push(`/dashboard/stores`);
  }
    return(
        <>
        <div className={classes.container}>
      <header className={classes.header}>
        <h1>
         Settings
        </h1>
        <p>Update your store</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={updateStore}>
          <div className={classes.row}>
            <p  className={classes.name}>
              <label htmlFor="name">Store Name</label>
              <input type="text" id="name" name="name" placeholder='name' required  />
            </p>
            
          </div>
          <p>
          <label htmlFor="id">Store Id</label>
          <input type="text" id="id" name="id" required value={store.id} readOnly  />
          </p>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
              placeholder='description'
            ></textarea>
          </p>
          <Button type='submit'>Update Store</Button>
          <Button onClick={handleDelete}>Delete Store</Button>
        </form>
      </main>
      </div>
    </>
    )
}