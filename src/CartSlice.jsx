import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const plant=action.payload;
      const exisitingItem=state.items.find((item)=>item.id === plant.id);
      if(exisitingItem){
        exisitingItem.quantity +=1;
      }
      else{
        state.items.push({
          ...plant,quantity:1
        })
      }
    },
    removeItem: (state, action) => {
      const name=action.payload;
      state.items=state.items.filter((item)=>item.name !== name);
    },
    updateQuantity: (state, action) => {
      const {name,amount} =action.payload;
      const itemToupdate=state.items.find((item)=> item.name === name);
      if(itemToupdate){
        itemToupdate.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
