'use client'

import { useRouter } from "next/navigation";
import { deleteStore, getStore, updateStore } from "../util/datafetch";
import classes from './updateStore.module.css'
import { Button } from "@mui/material";
import { useState } from "react";

export default  function UpdateStore({data}:any)
{
    const store:any=data;
    const router=useRouter();
    const[name,setName]=useState(store.name);
    const[description,setDescription]=useState(store.description);

    const handleName=(event: any)=>{
        const settext=event.target.value;
        setName(settext);
     }
     const handleDescription=(event:any)=>{
       const setDes=event.target.value;
       setDescription(setDes);
     }
  
  async function handleDelete()
  {
    const res= await deleteStore(store.id);
    console.log(res);
    router.push(`/dashboard/stores`);
  }
  async function update(formData:any)
  {
    const res= await updateStore(formData);
     router.push(`/dashboard/stores/${store.id}`);
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
        <form className={classes.form} action={update}>
          <div className={classes.row}>
            <p  className={classes.name}>
              <label htmlFor="name">Store Name</label>
              <input type="text" id="name" name="name" placeholder='name' required value={name} onChange={handleName}/>
            </p>
            
          </div>
          <p>
          <label   htmlFor="id">Store Id</label>
          <input type="text" id="id" name="id" required value={store.id} readOnly  />
          </p>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
              placeholder='description'
              value={description}
              onChange={handleDescription}
            ></textarea>
          </p>
          <div className={classes.actions}>
          <div> <Button type='submit'>Update</Button></div>
          <Button onClick={handleDelete}>Delete</Button>
          </div>
        </form>
      </main>
      </div>
    </>
    )
}