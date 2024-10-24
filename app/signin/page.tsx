'use client'

import classes from '../../auth/register.module.css'
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import { addCartProducts, Login } from '../../util/datafetch';
import { useSelector } from 'react-redux';
import { RootState } from '../cart/store';
import { Product } from '../cart/types';
import { useRouter } from 'next/navigation';




class CartProduct
{
    CartId:any;
    ProductId:any;
    Quantity:any;

    constructor(cartId:any,ProductId:any,Quantity:any)
    {
       this.CartId=cartId,
       this.ProductId=ProductId,
       this.Quantity=Quantity
    }
}




export  default  function SignInSide()
 {
   const router=useRouter();
  const amnt :number = useSelector((state: RootState) => state.counter.total);
  const data :Product[] = useSelector((state: RootState) => state.counter.products);
  
  function getCookie(name:string) {
    let cookiesArray = document.cookie.split('; ');
    for (let cookie of cookiesArray) {
        let [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return ""; 
   }


const decodeToken = (token: string) => {
  try {
    // Decode the token without verifying its signature
    const decoded = jwt.decode(token, { complete: true })
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
    
 const token:string = getCookie('userData');


 

   async function handleReduxProducts(formData:any) {

     const res= await Login(formData);
      if(res)
      {
        console.log(token)
        
        console.log("entered")
         dot()
      }
    }
    async function dot() {
      const token = getCookie('userData');
      const detoken= decodeToken(token)
        console.log(JSON.stringify(detoken));
      if(data.length!=0 && token )
      {
      let cartproducts=[];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const obj={productId:element.id,quantity:1}
        cartproducts.push(obj);
       }
       console.log(cartproducts);
  
         const res=await addCartProducts(cartproducts);
    }  
    //  router.push('/');
     window.location.href='/';
   }

  return (

    <section className={classes.auth}>
    <h1>{'Login'}</h1>
    <form action={handleReduxProducts}>
      <div className={classes.control}>
        <label htmlFor='username'>User name</label>
        <input type='text' id='username' name='username' required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' required />
      </div>
      <div className={classes.actions}>
        <button  type="submit">{'Login'}</button>
      </div>
      <div className={classes.register}>
        <Link className={classes.register}href={`/register`}>Register</Link>
      </div>
    </form>
  </section>

    // <ThemeProvider theme={defaultTheme}>
    //   <Grid container component="main" sx={{ height: '100vh' }}>
    //     <CssBaseline />
    //     <Grid
    //       item
    //       xs={false}
    //       sm={4}
    //       md={7}
    //       sx={{
    //         backgroundImage: 'url()',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundColor: (t) =>
    //           t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //       }}
    //     />
    //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //       <Box
    //         sx={{
    //           my: 8,
    //           mx: 4,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //           Sign in
    //         </Typography>
    //         <Box component="form" noValidate onSubmit={} sx={{ mt: 1 }}>
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="username"
    //             label="enter username"
    //             name="username"
    //             autoFocus
    //           />
           
    //        <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="password"
    //             label="enter password"
    //             name="password"
    //           />
    //           <FormControlLabel
    //             control={<Checkbox value="remember" color="primary" />}
    //             label="Remember me"
    //           />
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             sx={{ mt: 3, mb: 2 }}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid container>
    //             <Grid item xs>
    //               <Link href="#" variant="body2">
    //                 Forgot password?
    //               </Link>
    //             </Grid>
    //             <Grid item>
    //               <Link href="#" variant="body2">
    //                 {"Don't have an account? Sign Up"}
    //               </Link>
    //             </Grid>
    //           </Grid>
             
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>
  );
}
