'use client'

import { useState } from 'react';
import classes from './productform.module.css'
import { updateProduct } from '../util/datafetch';
import { useRouter } from 'next/navigation';

export default  function ProductForm({product}:any)
{
   const router=useRouter();
   async function update(formData:any)
   {
     const res= await updateProduct(formData);
     router.push(`/dashboard/stores/${product.storeId}`);
   }


  const[name,setName]=useState(product.name);
  const[description,setDescription]=useState(product.description);
  const [price,setPrice]=useState(product.price);
  const[category,setCategory]=useState(product.category);
  const[image,setImage]=useState(product.imageUrl);
    const handleName=(event: any)=>{
       const settext=event.target.value;
       setName(settext);
    }
    const handleDescription=(event:any)=>{
      const setDes=event.target.value;
      setDescription(setDes);
    }
    const handlePrice=(event:any)=>{
      const setprice=event.target.values;
      setPrice(setprice);
    }
    const handleCategory=(event:any)=>{
      const setcategory=event.target.value;
       setCategory(setcategory);
    }
    const handleImage=(event:any)=>{
      const setimage=event.target.value;
      setImage(setimage);
    }
    return(
      <>
      <div className={classes.container}>
      <header className={classes.header}>
        <h1>
         <span className={classes.highlight}>Update Product</span>
        </h1>
        <p>Update product of your store</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={update}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text"  name="name" required  value={name} onChange={handleName} />
            </p>
          </div>
          <p>
           <label htmlFor="name">id</label>
              <input type="text" name="id" readOnly value={product.id}  />
            </p>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              required

              onChange={handleDescription}
            ></textarea>
          </p>
          <p>
          <label htmlFor="category">Choose a user type:</label>
            <select id="category" name="category">
            <option value="skateboards">Skateboards</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="clothing">Clothing</option>
            </select>
          </p>
          <p>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" required  value={price} onChange={handlePrice}/>
            </p>
          <p>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" name="image" required  value={image} onChange={handleImage}></input>
          </p>
          <p className={classes.actions}>
          <button  type="submit">Update</button>
          </p>
        </form>
      </main>
      </div>
    </>
    );
}