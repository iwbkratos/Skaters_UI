import * as React from 'react';
import { Product } from '../../app/cart/types';



export default function MultiActionAreaCard(products:Product[]) {
 console.log(Array.isArray(products))
 const data:any=products[0];
 console.log(data)
 if(!products||products.length<1)
  {
     return <p> no products here...</p>
  }
  return (
    <div className="product-grid">
    {products.map((product:any) => (
      <div key={product.id} >
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.name}</p>
      </div>
    ))}
  </div>
);
};







