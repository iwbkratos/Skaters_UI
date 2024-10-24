'use client'

import { useRouter } from 'next/navigation';
import { createStore } from '../../../../util/datafetch'
import classes from './page.module.css'

export default function createStorePage()
{
  const router=useRouter();
  async function create(formData:any)
  {
    const res= await createStore(formData);
     router.push(`/dashboard/stores`);
  }

    return(
        <>
      <div className={classes.container}>
      <header className={classes.header}>
        <h1>
           New Store
        </h1>
        <p>Add a new store to your account</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={create}>
          <div className={classes.row}>
            <p  className={classes.name}>
              <label htmlFor="name">Store Name</label>
              <input type="text" id="name" name="name" required placeholder='store Name'/>
            </p>
            
          </div>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder='description'
              required
            ></textarea>
          </p>
          <div className={classes.actions}>
          <button type='submit'>Add Store</button>
          </div>
        </form>
      </main>
      </div>
    </>
    )
}