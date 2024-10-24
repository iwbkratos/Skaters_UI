'use server'

import { notFound } from 'next/navigation';
import axios from 'axios';
import { cookies } from 'next/headers'


interface addCartProduct
{
    cartId:string,
    productId:string
    quantity:number
}



class User
{
  username:string;
  password:string;
  roles:string[];

  constructor(username:string,password:string,roles:string[])
  {
    this.username=username,
    this.password=password,
    this.roles=roles
  }
} 

export async function Register(formData:any) {
    
  const data={
    name: formData.get('username'),
    password:formData.get('password'),
    role:[formData.get('userRole')]
  };
  const user =new User(data.name,data.password,data.role);
  const obj=JSON.stringify({username:user.username,password:user.password,roles:user.roles});
  console.log(obj);
  
  if(isInvaliText(user.username) ||
     isInvaliText(user.password)
    )
     {
      throw new Error('Invalid input');
     }
    
     var res=await fetch("http://localhost:5288/api/Auth/register",
      {  method:'POST',
        headers:{
          'Content-Type': 'application/json'
           },
         body:obj
      })
    if(res.ok)
        {
          console.log(res.status);

        }
        else{
          const err= res.json();
           console.error('Register Request failed with status:', res.status, res.statusText,err );
        }
  
}


  
export async function Login(formData:any) {
    
  const user={
    name: formData.get('username'),
    password:formData.get('password'),
  
  };
  if(isInvaliText(user.name) ||
     isInvaliText(user.password)
    )
     {
      throw new Error('Invalid input');
     }
    console.log(user.name+''+user.password);
     var res=await fetch("http://localhost:5288/api/Auth/Login",
      {  method:'POST',
         headers:{
          'Content-Type': 'application/json',
         },
         body:JSON.stringify({username:user.name,password:user.password})
      }
    );
    console.log(res.status);
    if(res.ok)
        {
          let result=await res.json();
          let token:any=result.jwtToken;
          cookies().set('userData', token)
          return result;
        }
        else{
           console.error('Request failed with status:', res.status, res.statusText);
        }
}  

export async function Allproducts()
{
     
      const res= await axios.get(`http://localhost:5288/api/Products/products?pageNumber=1&pageSize=100`)
        if(res.statusText=="success" )
          {
            return res.data;
          }
          else
          {
            return res.statusText;
          }      
      
      
    
}

export async function getProducts()
{
      let data:any;
      await axios.get(`http://localhost:5288/api/Products/products?pageNumber=1&pageSize=20`).then(res=>{
            if(res.status!=200)
                       {
                        throw new Error('something went wrong!!!');
                  }
              data=res.data;
            }
     )
    if(!data)
      {
        notFound();
      }
   
      return data;

    
}

export async function FilterProducts(category:string)
{
  const token=cookies().get('userData')?.value;
      let data ;
      await axios.get(`http://localhost:5288/api/Products/products?filterOn=category&filterQuery=${category}&pageNumber=1&pageSize=8`,
        {
          headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
        }
      ).then(res=>{
            if(res.status!=200)
                       {
                        throw new Error('something went wrong!!!');
                  }
           data = res.data});

      if(!data)
            {
             throw new Error('error occure while fetching data');
            }
                 return data;
}

export async function getProductById(id:any)
{
  const token=cookies().get('userData')?.value;
 var res= await axios.get(`http://localhost:5288/api/Products/${id}`,
    {
      headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    }
  )
  if(res.status)
  {
    return  res.data;

  }
  else{
    return null;
  }
}
export   async function createProduct(formData:any) {
  const product={
      storeId:formData.get('storeid'),
      name: formData.get('name'),
      description:formData.get('description'),
      category: formData.get('category'),
      price: formData.get('price'),
      image:formData.get('image'),
     
    };
    if(isInvaliText(product.name) ||
       isInvaliText(product.description) || 
       isInvaliText(product.category)||
       isInvaliText(product.price)|| 
       isInvaliText(product.image))
       {
        throw new Error('Invalid input');
       }
       const token=cookies().get('userData')?.value;
       var res=await axios.post("http://localhost:5288/api/Products",
        {
          storeId:product.storeId,name:`${product.name}`,description:`${product.description}`,category:`${product.category}`,price:`${product.price}`,imageUrl:`${product.image}`
        },
        {
          headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
        
      });
      if(res.status==200)
          {
            var result=res.data;
            console.log(result);
          }
          else{
             console.error('Request failed with status:', res.status, res.statusText);
             const errorText =  res.statusText;
             console.error('Error details:', errorText);
          }
}



export async function createStore(formData:any)
  {
    const store={
        name:formData.get('name'),
        description: formData.get('description'),
      
    };
    if(
       
       isInvaliText(store.description)||
       isInvaliText(store.name))
       {
        throw new Error('Invalid input');
       }
       const token=cookies().get('userData')?.value;
     const res=await axios.post('http://localhost:5288/api/Store',
                           {
                            name:store.name,
                            description:store.description
                            },
                           { 
                            headers:{
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            },  
                           }
                         
     );
     if(res.status==200)
     {
       var result= res.data;
       console.log(result);
     }
     else{
        console.error('Request failed with status:', res.status, res.statusText);
        const errorText =  res.data;
        console.error('Error details:', errorText);
     }
}

export  async function updateStore(formData:any) {
  const store={
      id:formData.get('id'),
      name: formData.get('name'),
      description:formData.get('description'),
    };
    if(isInvaliText(store.name) ||
       isInvaliText(store.description) )
       {
        throw new Error('Invalid input');
       }
       const token=cookies().get('userData')?.value;
       var res=await axios.put(`http://localhost:5288/api/Store/${store.id}`,
        {name:store.name,description:store.description},
        {
          headers:{
              'Content-Type': 'application/json',
              // 'Authorization': `Bearer ${token}`
          },
      
      });
      if(res.status==200)
          {
            var result=res.data;
            console.log("success");
            
          }
          else{
             console.error('Request failed with status:', res.status, res.statusText);
             const errorText = await res.statusText;
             console.error('Error details:', errorText);
          }

}

export async function getStore(id:any)
  {
    const token=cookies().get('userData')?.value;
     const res=await axios.get(`http://localhost:5288/api/Store/${id}`,
                           { 
                            headers:{
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            },
                          }
     );
     if(res.status==200)
     {
      return res.data;
       
     }
     else{
        console.error('Request failed with status:', res.status, res.statusText);
        const errorText = await res.statusText;
        console.error('Error details:', errorText);
     }
}

export async function deleteStore(id:any)
  {
    const token=cookies().get('userData')?.value;
     const res=await axios.delete(`http://localhost:5288/api/Store/${id}`,
                           {
                            headers:{
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            },
                          }
     );
     if(res.status==200)
     {
      return  res.data;      
     }
     else{
        console.error('Request failed with status:', res.status, res.statusText);
        const errorText = await res.statusText;
        console.error('Error details:', errorText);
     }
}

export  async function showStore()
{
  const token=cookies().get('userData')?.value;
    var res=await axios.get("http://localhost:5288/api/Store/store",
          {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
               
          }
    );
     if(res.status==200)
     {
        console.log("yes");
        return await res.data;
     }
     else{
        console.log("no")
        console.log(token)
        console.error('Request failed with status:', res.status, res.statusText);
        const errorText = await res.statusText;
        console.error('Error details:', errorText);
     }
     return null;
}

export  async function StoreProducts(storeId:any)
{
  const token=cookies().get('userData')?.value;    
     var res=await axios.get(`http://localhost:5288/api/Products/store/${storeId}`,
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
     );
     if(res.status==200)
     {
        console.log("yes");
       
        console.log(res);
        return  res.data;
     }
     else
     {
        console.log("no")
        console.error('Request failed with status:', res.status, res.statusText);
        const errorText = await res.statusText;
        console.error('Error details:', errorText);
     }
     return null;
}

export  async function updateProduct(formData:any) {
  const token=cookies().get('userData')?.value;
  const product={
      id:formData.get('id'),
      name: formData.get('name'),
      description:formData.get('description'),
      category: formData.get('category'),
      price: formData.get('price'),
      image:formData.get('image'),
     
    };
    if(isInvaliText(product.name) ||
       isInvaliText(product.description) || 
       isInvaliText(product.category)||
       isInvaliText(product.price)|| 
       isInvaliText(product.image))
       {
        throw new Error('Invalid input');
       }
       
       var res=await axios.put(`http://localhost:5288/api/Products/update/${product.id}`,
        {name:`${product.name}`,description:`${product.description}`,category:`${product.category}`,price:`${product.price}`,imageUrl:`${product.image}`},
        {
          headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
          });
      if(res.status==200)
          {
            var result=await res.data;
            console.log("success");
            
          }
          else{
             console.error('Request failed with status:', res.status, res.statusText);
             const errorText = await res.statusText;
             console.error('Error details:', errorText);
          }

}

  export async function deleteProduct(id:any)
  {
    console.log("id :"+ id);
    const token=cookies().get('userData')?.value;
    var res=await axios.delete(`http://localhost:5288/api/Products/${id}`,{
      headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
    })
    if(res.status==200)
      {
        var result=await res.data;
        console.log("success");
        
      }
      else{
         console.error('Request failed with status:', res.status, res.statusText);
         const errorText = await res.statusText;
         console.error('Error details:', errorText);
      }
  }

 export async function createCart()
 {
  const token=cookies().get('userData')?.value;
  console.log(token);
     try{
       var res=await axios.get("http://localhost:5288/api/Carts/newcart",
        {
          headers:{
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
           }, 
                                         
        }
       );
       if(res.status==200)
       {
          const json= res.data ;
          console.log("cart Id : "+json.id);
         return json.id;
       }
       else{
        console.log("error occured "+res.status);
       }
      }
      catch(error)
      {
         console.log(error);
      }
 }

 export async function updateCart(id:any,status:string,total:number)
 {
  const token=cookies().get('userData')?.value;
  const cart={
    status:status,
    total:total
  }
    console.log(total)
    //  try{
       var res=await axios.put(`http://localhost:5288/api/Carts/update/${id}`,
        
        {  
          status:cart.status,total:total   
        }, 
        
        {
          headers:{
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
           },
                                         
        }
       
       );
       if(res.status==200)
       {
          const json= res.data ;
         return json;
       }
       else{
        console.log("error=====> "+res.status);
       }
      // }
      // catch(error)
      // {
      //    console.log(error);
      // }
 }
 
    
 
 export async function addCartProduct(product:any,cartId:any)
 {
    
    const data={
      cartId:cartId,
      productId:product.id,
      quantity:1
    }
     
  try{
    const token=cookies().get('userData')?.value;
    var res=await axios.post("http://localhost:5288/api/CartProduct",
      {cartId:data.cartId,productId:data.productId,quantity:data.quantity},
{
       headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
}
    );
    if(res.status==200)
    {
       const json=await res.data;
      return json;
    }
    else{

      console.log("error=====> "+res.status);
    }
   }
   catch(error)
   {
      console.log(error);
   }
 }


 export async function addCartProducts(products:any[])
 {
  // let cartProducts:any[]=[]
  // const jsonProducts=JSON.stringify({products})
   console.log(products);
  // const cartId=await createCart();
  // for (let index = 0; index < products.length; index++) {
  //  const element = products[index];
  //  const obj={cartId:cartId,productId:element?.productId,quantity:1}
  //   cartProducts.push(obj);
  // }  
 
  try{
    const token=cookies().get('userData')?.value;
    var res=await axios.post("http://localhost:5288/api/CartProduct/Products",
        products,
     {
       headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },                        
     }
    );
    if(res.status==200)
    {
       const json=res.data ;
      return json;
    }
    else{
      console.log("error=====> "+res.status);
    }
   }
   catch(error)
   {
      console.log(error);
   }
 }


 export async function getCartProductsById(id:any)
 {
     
  try{
    const token=cookies().get('userData')?.value;
    var res=await axios.get(`http://localhost:5288/api/CartProduct/cart=${id}`,
     {
       headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
                             
     }
    );
    if(res.status==200)
    {
       const json=res.data ;
      return json;
    }
    else{
     console.log(res.statusText,res.status);
    }
   }
   catch(error)
   {
      console.log(error);
   }
 }

 export async function deleteCartProductsById(id:any)
 {    
  try{
    const token=cookies().get('userData')?.value;
    var res=await axios.delete(`http://localhost:5288/api/CartProduct/${id}`,
     {
       headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
                             
     }
    );
    if(res.status==200)
    {
       const json=res.data ;
      return json;
    }
    else{
     console.log(res.statusText,res.status);
    }
   }
   catch(error)
   {
      console.log(error);
   }
 }


 export async function getCartProductsByUser()
 {
     
  try{
    const token=cookies().get('userData')?.value;
    var res=await axios.get(`http://localhost:5288/api/CartProduct/cartproducts`,
     {
       headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
                             
     }
    );
    if(res.status==200)
    {
       const json=res.data ;
      return json;
    }
    else{
     console.log(res.statusText,res.status);
    }
   }
   catch(error)
   {
      console.log(error);
   }
 }

 export async function getCartProductsByfilter(status:string)
 {
     
  try{
    const token=cookies().get('userData')?.value;
    var res=await axios.get(`http://localhost:5288/api/CartProduct/cartproducts?status=${status}`,
     {
       headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
                             
     }
    );
    if(res.status==200)
    {
       const json=res.data ;
      return json;
    }
    else{
     console.log(res.statusText,res.status);
    }
   }
   catch(error)
   {
      console.log(error);
   }
 }


 export async function getCartProductsByCartId(id:string)
 {
     console.log(id);
  try{
    const token=cookies().get('userData')?.value;
    var res=await axios.get(`http://localhost:5288/api/CartProduct/cartproduct=${id}`,
     {
       headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
                             
     }
    );
    if(res.status==200)
    {
       const json=res.data ;
      return json;
    }
    else{
     console.log(res.statusText,res.status);
    }
   }
   catch(error)
   {
      console.log(error);
   }
 }


function isInvaliText(text:string)
{
 return !text||text.trim()==='';
}

