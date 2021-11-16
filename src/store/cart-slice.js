import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        quantity:0
    },
    reducers:{
       addTOCart(state,action){
           const newItem=action.payload;
           const existingItem=state.items.find((data)=>data.id === newItem.id);
           if(!existingItem){
            state.items.push({id: newItem.id, price:newItem.price,name:newItem.title,quantity:1,totalPrice:newItem.price})
           }else{
               existingItem.quantity=existingItem.quantity+1;
               existingItem.totalPrice=existingItem.totalPrice + newItem.price;
           }
        },
        removeFromCart(state,action){
            const id=action.payload;
            const existingItem=state.items.find(data=>data.id === id);
            console.log(existingItem);
            return existingItem
            state.totalQuantity--;
            if(!existingItem.quantity===1){
             state.items=state.items.filter(item=>item.id !==id)
            }else{
                existingItem.quantity--;
                // existingItem.quantity=existingItem.quantity+1;
                // existingItem.totalPrice=existingItem.totalPrice + newItem.price;
            }
         }
    }
})
export const cartActions= cartslice.actions;
export default cartslice  
