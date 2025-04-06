import { createSlice } from "@reduxjs/toolkit";

interface CounterState{
    count: number;
};

const initialState: CounterState ={
    count:0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState, 
     reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement: (state)=>{
            state.count -= 1;
        },
        incrementByAmount:(state, actions)=>{
            state.count += actions.payload
        },
    },
})

export const counterReducer = counterSlice.reducer;
export const  {increment, decrement, incrementByAmount} = counterSlice.actions;