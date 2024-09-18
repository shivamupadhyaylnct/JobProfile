import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const Store=configureStore({
    reducer:{
        authData:userReducer
    }
})
export default Store