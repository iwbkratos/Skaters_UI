
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category:string;
}

export interface CounterState {
  products:Product[];
  value: number;
  total:number;
  isActive:boolean;
 
}

export const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterActionTypes = IncrementAction | DecrementAction;
