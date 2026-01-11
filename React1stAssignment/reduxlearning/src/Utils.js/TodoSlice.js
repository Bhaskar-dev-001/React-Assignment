import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    list:[],
}

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            state.list.push({id:Date.now(), text:action.payload})
        },
        DeleteTodo:(state, action)=>{
            state.list = state.list.filter(t=> t.id !== action.payload)
        }
    }
})


export const {addTodo,DeleteTodo} =todoSlice.actions
export default todoSlice.reducer