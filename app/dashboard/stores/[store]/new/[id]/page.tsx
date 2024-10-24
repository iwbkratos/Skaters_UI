'use client'

import { useRouter } from "next/navigation";
import { createProduct } from "../../../../../../util/datafetch"
import classes from "./page.module.css"
export default function newProduct({params}:any)
{
  const router=useRouter();
  async function create(formData:any)
  {
    const res= await createProduct(formData);
     router.push(`/dashboard/stores/${params.id}`);
  }

  
    return(
        <>
        <div className={classes.container}>
      <header className={classes.header}>
        <h1>
         <span className={classes.highlight}>Add Product</span>
        </h1>
        <p>Add a new product to your store</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={create}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text"  name="name" required />
            </p>
     
          </div>

          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
            ></textarea>
          </p>
          <p>
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
            <option value="skateboards">Skateboards</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="clothing">Clothing</option>
            </select>
          </p>
          <p>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" required />
            </p>
          <p>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" name="image" required></input>
          </p>
          <p>
          <label htmlFor="storeid">StoreId</label>
          <input type="text" id="storeid" name="storeid" required  value={params.id}/>
          </p>
          <p className={classes.actions}>
          <button type="submit">Add product</button>
          </p>
        </form>
      </main>
      </div>
    </>
    )
}