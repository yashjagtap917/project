import { configureStore } from "@reduxjs/toolkit";
import ModeSlice from "./slice/ModeSlice";
import UserSlice from "./slice/UserSlice";

let store = configureStore({
    reducer: {
        mode: ModeSlice.reducer,
        user: UserSlice.reducer
    }
})

export default store