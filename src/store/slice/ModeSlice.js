import { createSlice } from "@reduxjs/toolkit";

let ModeSlice = createSlice({
    name: "mode",
    initialState: false,
    reducers: {
        changeMode(state, action) {
            return !state //!false
        }
    }

})

export default ModeSlice
export let { changeMode } = ModeSlice.actions


