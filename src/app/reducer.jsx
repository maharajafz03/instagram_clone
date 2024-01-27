import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../screen/UserSlice";

export const rootReducer = combineReducers({
    user: userSlice.reducer
})