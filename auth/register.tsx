
import Link from 'next/link';
import { Register } from '../util/datafetch';
import classes from './register.module.css'
import { useRouter } from 'next/navigation';

export default function RegisterUser()
{
  const router=useRouter();
   async function handleRegister(formData:any)
   {
      const res=  await Register(formData);
      router.push('/signin')
   }
  
    return(
        <section className={classes.auth}>
        <h1>{'Register'}</h1>
        <form action={handleRegister}>
          <div className={classes.control}>
            <label htmlFor='username'>User name</label>
            <input type='email' id='username' name='username' required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' required />
          </div>
          <div className={classes.control}>
            <label htmlFor="userRole">Choose a user type:</label>
            <select id="userRole" name="userRole">
            <option value="Seller">Seller</option>
            <option value="Customer">Customer</option>
            </select>
          </div>
          <div className={classes.actions}>
            <button type="submit">{'Register Account'}</button>
          </div>
          <div className={classes.register}>
        <Link  className={classes.register} href={`/signin`}>signin</Link>
      </div>
        </form>
      </section>
    );
}