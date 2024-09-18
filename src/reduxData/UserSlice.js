import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
    name:'user',
    initialState:{
        name:"user",
        value:{name:undefined,
               contact:undefined,
               token:undefined,
               isLogin:false,
               type:undefined
            },
    },
    reducers:{
        authReducer:(state,action)=>{
            state.value=action.payload
            console.log("action :",JSON.stringify(action))
            console.log("slice-state.value :",state.value)
            
        }
    }
})
export const{authReducer}=Slice.actions
export default Slice.reducer