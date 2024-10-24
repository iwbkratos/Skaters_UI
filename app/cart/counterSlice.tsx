
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState, Product } from './types';
import { stat } from 'fs';

const initialState: CounterState = {
  products:[],
  value:0,
  total:0,
  isActive:true,
  
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state,action:PayloadAction<Product>) {
      const exists = state.products.some((product: Product) => product.id === action.payload.id);

      if (!exists) {
      
        state.products.push(action.payload);
        state.total += action.payload.price;
        state.value = state.products.length;
      }
      // state.products.push(action.payload);
      // const amnt : number=action.payload.price;
      //  state.total+=amnt;
      // state.value = state.products.length;
      
    },
    decrement(state,action:PayloadAction<string>) {
      const item :Product[]=state.products.filter((product:Product)=>product.id===action.payload)
            state.total-=item[0].price;
            state.products=state.products.filter((product:Product)=>product.id!==action.payload)
            
      state.value = state .products.length;
       
    },
    clear(state)
    {
      state.products=[];
      state.total=0;
      state.value=0;
    }
  },
});

export const { increment, decrement,clear } = counterSlice.actions;

export default counterSlice.reducer;
