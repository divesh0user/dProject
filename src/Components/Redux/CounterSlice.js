import { createSlice, isActionCreator } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        },
        incrementByUser:(state,action)=>{
            state.count += action.payload;
        },
        decrementByUser:(state,action)=>{
            state.count -= action.payload;
        }
    }
})

export const {increment,incrementByUser,decrement,decrementByUser} = counterSlice.actions;

export default counterSlice.reducer;xxxx