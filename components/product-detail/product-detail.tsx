
import classes from './product-detail.module.css'

import { notFound } from 'next/navigation';

import AddtoCart from '../ui/addtocart';
import { getProductById } from '../../util/datafetch';



export default async function ItemDetails({productId}:any)
{
    
    const data:any= await getProductById(productId);
  
    if(!data)
        {
            notFound();
        }
    const name:string=data.name;
    const price:string=data.price;
    const images:any=data.imageUrl
    // const imgurl:string="https://82c38f4b-faa2-47cc-bc64-e2769a30d976-743160.jpg";
    const category:string=data.category;
    const description:string=data.description;
  
    // console.log(productId);
   return(
   <>
    <main className={classes.main}>
        <section >
            <div className={classes.imagesection}>
            <div className={classes.image}>
              <img width={590} height={600} src={images} alt={name}></img>
            </div>
            <div className={classes.images}>
                <div >
                    <img src={images} height={130} width={140}/>
                </div>
            </div>
            </div>

        </section>
        <section >
         <div className={classes.detail}>
            <h1>{name}</h1>
            <div>
                <h2>Rp {price},00</h2>
                <h4>{category}</h4>
            </div>
            <div className={classes.line}></div>
            <h6>Description :</h6>
            <p>{description}</p>
            <div className={classes.cart}>
             <AddtoCart product={data}/>
            </div>
         </div>
        </section>
    </main>
   </> 
   )
}