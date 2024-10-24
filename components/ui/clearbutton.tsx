
import { useDispatch } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import { deleteCartProductsById } from "../../util/datafetch";
import { AppDispatch } from "../../app/cart/store";
import { decrement } from "../../app/cart/counterSlice";

export default function Clearbutton({product}:any)
{
  const dispatch=useDispatch<AppDispatch>(); 
  
  function getCookie(name:string) {
    let cookiesArray = document.cookie.split('; ');
    for (let cookie of cookiesArray) {
        let [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null; // Return null if the cookie is not found
}

// Usage
const token = getCookie('userData');

  
    async function handleDeleteCartProd(id:any)
    {
      const res= await deleteCartProductsById(id);
      if(res)
      {
        dispatch(decrement(id));
      }
      
    }
    
    return (
      <>
       {token && <button onClick={event=>{event.preventDefault(),  handleDeleteCartProd(product?.id);}}><ClearIcon/></button>}
       {!token && <button onClick={event=>{event.preventDefault(),dispatch(decrement(product?.id)); }}><ClearIcon/></button>}
        </>
    );
}